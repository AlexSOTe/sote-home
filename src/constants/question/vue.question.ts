export const VUE: Array<IQuestion> = [
  {
    id: '0',
    title: `vue2项目报了【Uncaught SyntaxError: Unexpected token '<'】的错`,
    desc: `vue2项目报了【Uncaught SyntaxError: Unexpected token ' <'】的错`,
    reason: 'vue-cli3+的vue项目，根目录/static文件夹内的资源在index.html无法访问到',
    solution: 'static目录应该放到public目录下，脚手架打包后会自动复制到dist目录下和index.html同级',
  },
  {
    id: '1',
    title: `vue-cli3+不知道怎么在index.html文件中注入变量`,
    desc: 'vue-cli3+不知道怎么在index.html文件中注入变量',
    reason: '',
    solution: '.env.xxx文件中的变量可以直接在index.html中使用，vue-cli自动注入的',
  },
  {
    id: '2',
    title: `字符串数组的字符串如何排序`,
    desc: '给一个字符串数组中的字符串按照unicode排序',
    reason: '',
    solution: `使用arr.sort((a,b)=>a.localeCompare(b))，localeCompare将a和b对比，返回1、-1、0、等等等来进行排序`,
  },
  {
    id: '3',
    title: `template中循环表单的【:key】不要使用动态生成`,
    desc: '有个表单的循环，在布局上面直接调用生成随机数的方法设置for循环的key，每行表单可以切换是否编辑的状态，当第一行表单切换为编辑状态输入了值后，把第二行表单的状态切换为编辑状态后，第一行表单输入的内容消失。',
    reason: '在布局上动态生成key每次视图发生变化就会再次重新生成key，组件状态被初始化',
    solution: `1.使用数组本身自带的唯一标识作为key
2.先在js中对数组遍历，添加用于视图展示的key，再在视图上渲染。`,
  },
];
