
<template>
  <div class="App">
    <canvas class="canvas" ref="canvas"></canvas>

    <Header/>

    <div class="pages">
      <router-view></router-view>
    </div>

    <Menu />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import Header from '@/components/public/Header.vue';
import Menu from '@/components/public/Menu.vue';
import { SubTrack } from "@/modules/SubTrack";
import { Track } from "@/modules/Track";

const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const cvs = canvas.value!;
  Init(cvs);
});


function initShaders(gl: any, vsSource: string, fsSource: string) {
  //创建程序对象
  const program = gl.createProgram();
  //建立着色器对象
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  //建立片元着色器
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  //把顶点着色器对象装进程序对象中
  gl.attachShader(program, vertexShader);
  //把片元着色器对象装进程序对象中
  gl.attachShader(program, fragmentShader);
  //连接webgl上下文对象
  gl.linkProgram(program);
  //启动程序对象
  gl.useProgram(program);
  //将程序对象挂到上下文对象上
  gl.program = program;
  return true;
}

function loadShader(gl: any, type: number, source: string) {
  //根据着色类型，建立着色器对象
  const shader = gl.createShader(type);
  //将着色器源文件传入着色器对象
  gl.shaderSource(shader, source);
  //编译着色器对象
  gl.compileShader(shader);
  //返回着色器对象
  return shader;
}


function Init(cvs: HTMLCanvasElement) {
  //顶点着色器
  const vsSource = `
//attribute的意思类似与js的export，导出让外部使用，并且可以修改
attribute vec4 a_Position;
attribute float a_PointSize;
void main() {
  gl_Position = a_Position;
  gl_PointSize = a_PointSize;
}
`;
  //片元着色器
  const fsSource = `
//把浮点数的精度设置为中等
precision mediump float;
uniform vec4 u_FragColor;
void main() {
  float dist = distance(gl_PointCoord,vec2(0.5,0.5));
  if (dist < 0.5) {
    gl_FragColor = u_FragColor;
  } else {
    discard;
  }
  gl_FragColor = u_FragColor;
}
`;
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;

  const gl: any = cvs.getContext("webgl")!;
  //开启颜色合成
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  //初始化着色器
  //功能：解析着色器文本，整合到程序对象，关联webgl上下文对象，实现两种语言的相互通信
  initShaders(gl, vsSource, fsSource);

  //设置attribute变量
  //获取到着色器语言里面的变量
  const a_Position = gl.getAttribLocation(gl.program, "a_Position");
  const a_PointSize = gl.getAttribLocation(gl.program, "a_PointSize");
  const u_FragColor = gl.getUniformLocation(gl.program, "u_FragColor");

  //声明颜色
  gl.clearColor(0, 0, 0, 0.3);
  //刷底色
  gl.clear(gl.COLOR_BUFFER_BIT);

  //存储订单数据的数组
  const a_points: IStar[] = [];

  const track = new Track();

  function onEvent(evt: MouseEvent, startTime: number = Date.now()) {
    const { clientX, clientY } = evt;
    const { left, top } = cvs.getBoundingClientRect();
    //获取到鼠标再canvas中点击的位置
    const [mX, mY] = [clientX - left, clientY - top];
    //坐标系转换
    const hafCvsW = cvs.width / 2;
    const hafCvsH = cvs.height / 2;
    const [x, y] = [mX - hafCvsW, -(mY - hafCvsH)];

    if (a_points.length <= 5000) {
      const size = Math.random() * 3 + 2;
      const colorA = 0.3;
      const obj: IStar = {
        x: x / hafCvsW,
        y: y / hafCvsH,
        size: size,
        colorR: Math.random(),
        colorG: Math.random(),
        colorB: Math.random(),
        colorA: colorA,
        fms: new Map<string, IFm[]>()
          .set(
            'colorA',
            [
              { time: 500, value: colorA },
              { time: 1000, value: 0 },
              { time: 1500, value: colorA },
            ]
          )
          .set(
            'size',
            [
              { time: 500, value: size },
              { time: 1000, value: 1 },
              { time: 1500, value: size },
            ]
          ),
      }
      a_points.push(obj);

      const subTrack = new SubTrack(obj);
      subTrack.loop = true;
      subTrack.start = startTime;
      subTrack.timeLen = 2000;
      track.add(subTrack);
    }
  }


  cvs.addEventListener('click', onEvent);

  for (var i = 0; i < 1000; i++) {
    const posObj = {
      clientX: Math.random() * cvs.width,
      clientY: Math.random() * cvs.height,
    };
    onEvent(posObj as MouseEvent, Date.now() + Math.random() * 6666);
  }

  /**
   * 全局时间线
   */
  function render() {
    //刷底色
    gl.clear(gl.COLOR_BUFFER_BIT);

    a_points.forEach((star: IStar, i) => {
      //修改顶点位置
      gl.vertexAttrib2f(a_Position, star.x, star.y);
      //修改顶点尺寸
      gl.vertexAttrib1f(a_PointSize, star.size);
      //修改顶点颜色
      gl.uniform4fv(u_FragColor, new Float32Array([star.colorA, star.colorG, star.colorB, star.colorA]));
      //画点
      gl.drawArrays(gl.POINTS, 0, 1);
    });
    track.update(Date.now());
    requestAnimationFrame(render);
  }
  render();
}
</script>

<style scoped lang="scss">
.App {
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);

  .canvas {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -10;
    width: 100vw;
    height: 100vh;
  }
}


.pages {
  min-height: calc(100vh - var(--nav-size));
  background-color: transparent;
}
</style>
