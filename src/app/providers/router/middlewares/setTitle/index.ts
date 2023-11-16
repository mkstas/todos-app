import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

export const setTitle = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  document.title = `${to.meta.title} | Task Tracker`;
  next();
};
