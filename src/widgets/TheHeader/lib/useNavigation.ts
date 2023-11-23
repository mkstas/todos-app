import { Ref, onMounted, onUnmounted, ref } from 'vue';

import { removeBlockScreen, toggleBlockScreen } from '@/shared/utils';

export const useNavigation = () => {
  const isMobile: Ref<boolean> = ref(false);
  const isMobileNavigation: Ref<boolean> = ref(false);

  const toggleMobileNavigation = () => {
    isMobileNavigation.value = !isMobileNavigation.value;
  };

  const toggleMobileNavigationAndToggleBlockScreen = () => {
    toggleMobileNavigation();
    toggleBlockScreen();
  };

  const closeMobileNavigation = () => {
    isMobileNavigation.value = false;
  };

  const checkIsMobile = () => {
    window.innerWidth < 768
      ? (isMobile.value = true)
      : (isMobile.value = false);
  };

  const checkIsNotMobileAndCloseMobileNavigation = () => {
    !isMobile.value && closeMobileNavigation();
  };

  const checkIsNotMobileAndRemoveBlockScreen = () => {
    !isMobile.value && removeBlockScreen();
  };

  const initNavigation = () => {
    onMounted(() => {
      checkIsMobile();

      window.addEventListener('resize', checkIsMobile);

      window.addEventListener(
        'resize',
        checkIsNotMobileAndCloseMobileNavigation,
      );

      window.addEventListener('resize', checkIsNotMobileAndRemoveBlockScreen);
    });

    onUnmounted(() => removeBlockScreen());
  };
  return {
    isMobile,
    isMobileNavigation,
    toggleMobileNavigationAndToggleBlockScreen,
    initNavigation,
  };
};
