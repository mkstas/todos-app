import { RouteLocationNormalized } from 'vue-router';

import { LayoutsEnum } from '@/shared/typicode';

export const loadLayout = async (
  to: RouteLocationNormalized,
): Promise<void> => {
  const { layout } = to.meta;

  const layoutName = layout || LayoutsEnum.default;

  const component = await import(
    `../../../../../widgets/${layoutName}/index.ts`
  );

  to.meta.layoutComponent = component.default;
};
