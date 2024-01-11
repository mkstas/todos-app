import { Ref, onMounted, onUnmounted, ref } from 'vue';

import { removeBlockScreen, toggleBlockScreen } from '@/shared/utils';

export const useNavigation = () => {
  const isMobile: Ref<boolean> = ref(false);
  const isMobileNavigationOpen: Ref<boolean> = ref(false);

  const toggleMobileNavigation = () => {
    isMobileNavigationOpen.value = !isMobileNavigationOpen.value;
  };

  const toggleMobileNavigationAndToggleBlockScreen = () => {
    toggleMobileNavigation();
    toggleBlockScreen();
  };

  const closeMobileNavigation = () => {
    isMobileNavigationOpen.value = false;
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
    isMobileNavigationOpen,
    toggleMobileNavigationAndToggleBlockScreen,
    initNavigation,
  };
};
