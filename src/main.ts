import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './assets/style/global.scss';
import './assets/style/keyframes.css';
import { createPinia } from 'pinia';

const pinia = createPinia();


const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');


console.log('%c当前环境配置', 'color:red;background-color:yellow;', import.meta.env);

