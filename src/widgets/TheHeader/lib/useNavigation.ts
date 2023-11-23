import { ref } from 'vue';

export const isMobile = ref(false);

export const isMobileNavigation = ref(false);

export const useNavigation = () => {
  const checkIsMobile = () => {
    window.innerWidth < 768
      ? (isMobile.value = true)
      : (isMobile.value = false);
  };

  const removeBlockScreen = () => {
    document.body.classList.remove('overflow-hidden');
  };

  const toggleBlockScreen = () => {
    document.body.classList.toggle('overflow-hidden');
  };

  const toggleMobileNavigation = () => {
    isMobileNavigation.value = !isMobileNavigation.value;
  };

  const checkIsMobileNavigationAndToggleBlockScreen = () => {
    isMobileNavigation ? toggleBlockScreen() : null;
  };

  const checkIsMobileAndCloseMobileNavigation = () => {
    isMobile.value ? (isMobileNavigation.value = false) : null;
  };

  const checkIsMobileAndRemoveBlockScreen = () => {
    isMobileNavigation.value || removeBlockScreen();
  };

  return {
    checkIsMobile,
    removeBlockScreen,
    toggleBlockScreen,
    toggleMobileNavigation,
    checkIsMobileNavigationAndToggleBlockScreen,
    checkIsMobileAndCloseMobileNavigation,
    checkIsMobileAndRemoveBlockScreen,
  };
};
