import { createRouter, createWebHistory } from 'vue-router';

import { loadLayout } from './middlewares/loadLayout';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: () => import('@/pages/SigninPage'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/pages/SignupPage'),
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('@/pages/BoardPage'),
    },
  ],
});

router.beforeEach(loadLayout);

export { router };
