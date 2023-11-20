import { createRouter, createWebHistory } from 'vue-router';

import { RoutesPathEnum, RoutesNameEnum } from '@/shared/typicode';

import { loadLayout, setTitle } from './middlewares';

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
    },
    {
      path: RoutesPathEnum.signin,
      name: RoutesNameEnum.signin,
      component: () => import('@/pages/TheSignin'),
      meta: {
        title: 'Вход',
      },
    },
    {
      path: RoutesPathEnum.signup,
      name: RoutesNameEnum.signup,
      component: () => import('@/pages/TheSignup'),
      meta: {
        title: 'Регистрация',
      },
    },
    {
      path: RoutesPathEnum.board,
      name: RoutesNameEnum.board,
      component: () => import('@/pages/TheBoard'),
      meta: {
        title: 'Доска задач',
      },
    },
  ],
});

router.beforeEach(setTitle);
router.beforeEach(loadLayout);

export { router };
