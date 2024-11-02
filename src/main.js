import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import { VueFinalModal } from 'vue-final-modal';
import router from './router.js';
import * as pl from '@/assets/placeHolder.js';


const app = createApp(App);
// Gắn constants vào globalProperties
app.config.globalProperties.$pl = pl;

// Đăng ký Vue Final Modal
app.use(router);
app.use(VueFinalModal);
app.mount('#app');
