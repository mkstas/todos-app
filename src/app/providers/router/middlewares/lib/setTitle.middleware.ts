import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

export const setTitle = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  to.meta.title && (document.title = `${to.meta.title} | Task Tracker`);
  next();
};
