import { createRouter, createWebHistory } from 'vue-router';

import { RoutesPathEnum, RoutesNameEnum } from '@/shared/typicode';

import { setTitle, checkAuth } from './middlewares';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: RoutesPathEnum.notFound,
      name: RoutesNameEnum.notFound,
      component: () => import('@/pages/NotFound'),
      meta: {
        title: 'Страница не найдена',
      },
    },
    {
      path: RoutesPathEnum.home,
      name: RoutesNameEnum.home,
      component: () => import('@/pages/Home'),
      meta: {
        title: 'Обзор',
        requiredAuth: false,
      },
    },
    {
      path: RoutesPathEnum.signin,
      name: RoutesNameEnum.signin,
      component: () => import('@/pages/Signin'),
      meta: {
        title: 'Вход',
        requiredAuth: false,
      },
    },
    {
      path: RoutesPathEnum.signup,
      name: RoutesNameEnum.signup,
      component: () => import('@/pages/Signup'),
      meta: {
        title: 'Регистрация',
        requiredAuth: false,
      },
    },
    {
      path: RoutesPathEnum.board,
      name: RoutesNameEnum.board,
      component: () => import('@/pages/Board'),
      meta: {
        title: 'Доска задач',
        requiredAuth: true,
      },
      children: [
        {
          path: ':id',
          name: RoutesNameEnum.tasks,
          component: () => import('@/pages/Board'),
        },
      ],
    },
  ],
});

router.beforeEach(checkAuth);
router.beforeEach(setTitle);

export { router };
