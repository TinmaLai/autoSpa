// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home.vue'),
  },
  {
    path: '/product-detail/:id',
    name: 'productDetail',
    component: () => import('@/components/details/ProductDetail.vue'),
  },
  {
    path: '/blogs',
    name: 'blogList',
    component: () => import('@/components/blogs/BlogList.vue'),
  },
  {
    path: '/services',
    name: 'serviceList',
    component: () => import('@/components/services/ServiceList.vue'),
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;