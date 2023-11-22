import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

import { auth } from '@/shared/firebase';
import { RoutesPathEnum } from '@/shared/typicode';

export const checkAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  if (to.matched.some(path => path.meta.requiredAuth)) {
    auth.currentUser?.uid ? next() : next({ path: RoutesPathEnum.signin });
  } else if (to.matched.some(path => path.meta.requiredAuth === false)) {
    auth.currentUser?.uid ? next({ path: RoutesPathEnum.board }) : next();
  } else {
    next();
  }
};
