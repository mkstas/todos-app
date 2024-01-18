import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('@/pages/Welcome'),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/Home'),
    },
  ],
});
