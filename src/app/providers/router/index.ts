import { createRouter, createWebHistory } from 'vue-router';

import { loadLayout, setTitle } from './middlewares';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: () => import('@/pages/TheSignin'),
      meta: {
        title: 'Вход',
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/pages/TheSignup'),
      meta: {
        title: 'Регистрация',
      },
    },
    {
      path: '/board',
      name: 'board',
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
