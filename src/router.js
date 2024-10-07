// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import ProductDetail from './components/details/ProductDetail.vue';

const routes = [
  {
    path: '/product-detail',
    name: 'product-detail',
    component: ProductDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;