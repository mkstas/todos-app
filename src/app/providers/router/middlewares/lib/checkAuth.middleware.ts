import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

import { auth } from '@/shared/firebase';
import { RoutesPathEnum } from '@/shared/typicode';

import { useUserStore } from '@/entities/user';

export const checkAuth = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const { setUser, getUser } = useUserStore();

  if (to.matched.some(path => path.meta.requiredAuth)) {
    if (auth.currentUser?.uid) {
      setUser(await getUser());
      next();
    } else {
      next({ path: RoutesPathEnum.signin });
    }
  } else if (to.matched.some(path => path.meta.requiredAuth === false)) {
    if (auth.currentUser?.uid) {
      next({ path: RoutesPathEnum.board });
      setUser(await getUser());
    } else {
      next();
    }
  } else {
    next();
  }
};
