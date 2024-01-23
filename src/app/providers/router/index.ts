import { createRouter, createWebHistory } from 'vue-router';

import { RoutesName, RoutesPath } from '@/shared/types';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: RoutesPath.welcome,
      name: RoutesName.welcome,
      component: () => import('@/pages/welcome-page'),
    },
    {
      path: RoutesPath.register,
      name: RoutesName.register,
      component: () => import('@/pages/register-page'),
    },
    {
      path: RoutesPath.login,
      name: RoutesName.login,
      component: () => import('@/pages/login-page'),
    },
  ],
});
