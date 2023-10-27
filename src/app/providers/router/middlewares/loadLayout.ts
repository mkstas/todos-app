import { RouteLocationNormalized } from 'vue-router';

import { AppLayoutsEnum } from '../typicode/AppLayouts.types';

export const loadLayout = async (
  route: RouteLocationNormalized,
): Promise<void> => {
  const { layout } = route.meta;

  const layoutName = layout || AppLayoutsEnum.default;

  const component = await import(
    `../../../../widgets/layouts/${layoutName}/index.ts`
  );

  route.meta.layoutComponent = component.default;
};
