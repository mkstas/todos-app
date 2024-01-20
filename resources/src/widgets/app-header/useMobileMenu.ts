import { Ref, onMounted, ref } from 'vue';
import { useBlockScreen } from '@/shared/utils';

export const useMobileMenu = () => {
  const { toggleBlockScreen, removeBlockScreen } = useBlockScreen();

  const isMobileScreen: Ref<boolean> = ref(false);
  const isMobileMenu: Ref<boolean> = ref(false);

  const closeMobileMenu = () => {
    isMobileMenu.value = false;
  };

  const toggleMobileMenu = () => {
    isMobileMenu.value = !isMobileMenu.value;
  };

  const checkIsMobileScreen = () => {
    window.innerWidth < 768
      ? (isMobileScreen.value = true)
      : (isMobileScreen.value = false);
  };

  const toggleMobileMenuAndBlockScreen = () => {
    toggleMobileMenu();
    toggleBlockScreen('overflow-hidden');
  };

  const isNotMobileScreenAndCloseMobileMenu = () => {
    !isMobileScreen.value && closeMobileMenu();
  };

  const isNotMobileScreenAndRemoveBlockScreen = () => {
    !isMobileScreen.value && removeBlockScreen('overflow-hidden');
  };

  const initMobileMenu = () => {
    onMounted(() => {
      checkIsMobileScreen();

      window.addEventListener('resize', checkIsMobileScreen);
      window.addEventListener('resize', isNotMobileScreenAndCloseMobileMenu);
      window.addEventListener('resize', isNotMobileScreenAndRemoveBlockScreen);
    });
  };

  return {
    isMobileScreen,
    isMobileMenu,
    toggleMobileMenuAndBlockScreen,
    initMobileMenu,
  };
};
