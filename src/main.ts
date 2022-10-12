import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import 'vant/lib/index.css';
import './assets/style/global.scss';
import './assets/style/keyframes.css';
import './assets/style/vant.cover.scss';
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
import { createPinia } from 'pinia';

const pinia = createPinia();


Locale.use('en-US', enUS);
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');


console.log('%c当前环境配置', 'color:red;background-color:yellow;', import.meta.env);

