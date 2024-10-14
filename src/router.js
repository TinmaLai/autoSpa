// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home.vue'),
  },
  {
    path: '/product-detail',
    name: 'product-detail',
    component: () => import('@/components/details/ProductDetail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;