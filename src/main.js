import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import { VueFinalModal } from 'vue-final-modal';
import router from './router.js';
import * as pl from '@/assets/placeHolder.js';
import * as cs from '@/constants/constants.js';
import '@/assets/variables.scss'; // Đường dẫn tới file SCSS
import 'ckeditor5/ckeditor5.css';

const app = createApp(App);
// Gắn constants vào globalProperties
app.config.globalProperties.$pl = pl;
app.config.globalProperties.$cs = cs;

// Đăng ký Vue Final Modal
app.use(router);
app.use(VueFinalModal);
app.mount('#app');
