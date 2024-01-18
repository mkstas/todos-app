import { createRouter, createWebHistory } from 'vue-router';

import { RoutesNameEnum, RoutesPathEnum } from '@/shared/types';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: RoutesPathEnum.welcome,
      name: RoutesNameEnum.welcome,
      component: () => import('@/pages/welcome-page'),
    },
    {
      path: RoutesPathEnum.register,
      name: RoutesNameEnum.register,
      component: () => import('@/pages/register-page'),
    },
    {
      path: RoutesPathEnum.login,
      name: RoutesNameEnum.login,
      component: () => import('@/pages/login-page'),
    },
  ],
});
