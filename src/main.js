import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import { VueFinalModal } from 'vue-final-modal';
import router from './router.js';


const app = createApp(App);
// Đăng ký Vue Final Modal
app.use(router);
app.use(VueFinalModal);
app.mount('#app');
