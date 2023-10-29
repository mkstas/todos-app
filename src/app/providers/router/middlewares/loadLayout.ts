import { RouteLocationNormalized } from 'vue-router';

import { LayoutsEnum } from '../typicode/Layouts.types';

export const loadLayout = async (
  route: RouteLocationNormalized,
): Promise<void> => {
  const { layout } = route.meta;

  const layoutName = layout || LayoutsEnum.default;

  const component = await import(`../../../../widgets/${layoutName}/index.ts`);

  route.meta.layoutComponent = component.default;
};
