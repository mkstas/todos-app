import { createRouter, createWebHistory } from 'vue-router';

import { loadLayout } from './middlewares/loadLayout';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/signin'),
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
