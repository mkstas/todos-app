import { createRouter, createWebHistory } from 'vue-router';

import { loadLayout } from './middlewares/loadLayout';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: () => import('@/pages/TheSignin'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/pages/TheSignup'),
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('@/pages/TheBoard'),
    },
  ],
});

router.beforeEach(loadLayout);

export { router };
