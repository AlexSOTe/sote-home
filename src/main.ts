import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import { store } from './store';
import 'vant/lib/index.css';
import './assets/style/global.scss';
import './assets/style/keyframes.css';
import './assets/style/vant.cover.scss';
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';


Locale.use('en-US', enUS);
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');


console.log('%c当前环境配置', 'color:red;background-color:yellow;', import.meta.env);

