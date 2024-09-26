import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import { VueFinalModal } from 'vue-final-modal';


const app = createApp(App);
// Đăng ký Vue Final Modal
app.use(VueFinalModal);
app.mount('#app');
