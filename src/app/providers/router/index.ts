import { createRouter, createWebHistory } from 'vue-router';

import { RoutesPathEnum, RoutesNameEnum, LayoutsEnum } from '@/shared/typicode';

import { loadLayout, setTitle, checkAuth } from './middlewares';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: RoutesPathEnum.notFound,
      name: RoutesNameEnum.notFound,
      component: () => import('@/pages/TheNotFound'),
      meta: {
        title: 'Страница не найдена',
      },
    },
    {
      path: RoutesPathEnum.home,
      name: RoutesNameEnum.home,
      component: () => import('@/pages/TheHome'),
      meta: {
        title: 'Обзор',
        requiredAuth: false,
      },
    },
    {
      path: RoutesPathEnum.signin,
      name: RoutesNameEnum.signin,
      component: () => import('@/pages/TheSignin'),
      meta: {
        title: 'Вход',
        requiredAuth: false,
        layout: LayoutsEnum.auth,
      },
    },
    {
      path: RoutesPathEnum.signup,
      name: RoutesNameEnum.signup,
      component: () => import('@/pages/TheSignup'),
      meta: {
        title: 'Регистрация',
        requiredAuth: false,
        layout: LayoutsEnum.auth,
      },
    },
    {
      path: RoutesPathEnum.board,
      name: RoutesNameEnum.board,
      component: () => import('@/pages/TheBoard'),
      meta: {
        title: 'Доска задач',
        requiredAuth: true,
      },
    },
  ],
});

router.beforeEach(checkAuth);
router.beforeEach(setTitle);
router.beforeEach(loadLayout);

export { router };
