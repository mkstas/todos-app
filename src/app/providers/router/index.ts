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
      component: () => import('@/pages/signup'),
    },
    {
      path: '/board',
      component: () => import('@/pages/board'),
    },
  ],
});

router.beforeEach(loadLayout);

export { router };
