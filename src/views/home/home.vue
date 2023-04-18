
<template>
  <div class="home flex-center">

    <div class="showBox flex-center">
      <div class="cube">
        <div class="m m1 flex-center ob"></div>
        <div class="m m2 flex-center ob"></div>
        <div class="m m3 flex-center ob"></div>
        <div class="m m4 flex-center ob"></div>
        <div class="m m5 flex-center ob"></div>
        <div class="m m6 flex-center ob"></div>
      </div>
    </div>
    <!-- <div style="width:100%;text-align: left;">
      <div>陀螺仪数据</div>
      <div>x: {{ obj.x }}</div>
      <div>y: {{ obj.y }}</div>
      <div>z: {{ obj.z }}</div>
    </div> -->

    <SiteInfo class="siteInfo"/>

  </div>
</template>

<script setup lang="ts">
import SiteInfo from '@/components/public/SiteInfo.vue';
import { computed } from '@vue/reactivity';
import { onMounted, reactive } from 'vue';
const obj = reactive({
  x: 0,
  y: 0,
  z: 0,
})
const rotation = computed(()=>{
  return `rotateX(${obj.y}deg) rotateY(${-obj.z}deg) rotateZ(${obj.x}deg)`
})

onMounted(() => {
  window.addEventListener('deviceorientation', (event: DeviceOrientationEvent) => {
    console.log(event.alpha, event.beta, event.gamma);
    obj.x = event.alpha ?? 0;
    obj.y = event.beta ?? 0;
    obj.z = event.gamma ?? 0;
  });
});
</script>

<style scoped lang="scss">
$rectSize: 200px;

.home {
  position: relative;
  text-align: center;
  overflow: hidden;
  height: calc(100vh - var(--nav-size));

  .showBox {
    width: $rectSize;
    height: $rectSize;
    border-radius: 50%;
    background: url('/static/img/icon_no_data.png') center center / 100% 100%;

    .cube {
      position: relative;
      width: $rectSize;
      height: $rectSize;
      perspective: 5000px;
      transform: v-bind(rotation);
      transform-style: preserve-3d;

      .m {
        position: absolute;
        width: $rectSize;
        height: $rectSize;
        font-size: 150px;
        color: rgba(0, 0, 0, 0.1);
        transform-style: preserve-3d;
        backdrop-filter: blur(5px);
        filter: blur(40px);

        &.m1 {
          background-color: rgba(#ff0000, 0.5);
          transform: translate3d(0, 0, calc(-1 * $rectSize / 2));
        }

        &.m2 {
          background-color: rgba(#ffa500, 0.5);
          transform: translate3d(0, 0, calc($rectSize / 2));
        }

        &.m3 {
          background-color: rgba(#ffff00, 0.5);
          transform: translate3d(calc(-1 * $rectSize / 2), 0, 0) rotateY(90deg);
        }

        &.m4 {
          background-color: rgba(#90ee90, 0.5);
          transform: translate3d(calc($rectSize / 2), 0, 0) rotateY(90deg);
        }

        &.m5 {
          background-color: rgba(#00ffff, 0.5);
          transform: translate3d(0, calc(-1 * $rectSize / 2), 0) rotateX(90deg);
        }

        &.m6 {
          background-color: rgba(#add8e6, 0.5);
          transform: translate3d(0, calc($rectSize / 2), 0) rotateX(90deg);
        }
      }
    }
  }

  .siteInfo {
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
  }
}
</style>
