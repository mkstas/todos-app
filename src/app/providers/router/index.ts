import { createRouter, createWebHistory } from 'vue-router';

import { loadLayout } from './middlewares/loadLayout';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home'),
    },
  ],
});

router.beforeEach(loadLayout);

export { router };
