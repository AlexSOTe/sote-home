import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router/router';
import './assets/style/global.scss';
import './assets/style/keyframes.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');


console.log('%c当前环境配置', 'color:red;background-color:yellow;', import.meta.env);
