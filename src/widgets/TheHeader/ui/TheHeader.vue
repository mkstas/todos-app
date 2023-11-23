<script lang="ts" setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';
import { BaseLogotype } from '@/shared/uilib';

import { TheNavigation } from '@/features/TheNavigation';
import { TheNavigationMobile } from '@/features/TheNavigationMobile';
import { TheButtonBurger } from '@/features/TheButtonBurger';

import {
  isMobile,
  isMobileNavigation,
  useNavigation,
} from '../lib/useNavigation';

const {
  checkIsMobile,
  toggleMobileNavigation,
  checkIsMobileAndRemoveBlockScreen,
  checkIsMobileNavigationAndToggleBlockScreen,
  checkIsMobileAndCloseMobileNavigation,
} = useNavigation();

const onClickBurger = () => {
  toggleMobileNavigation();
  checkIsMobileNavigationAndToggleBlockScreen();
};

onMounted(() => {
  checkIsMobile();

  window.addEventListener('resize', checkIsMobile);
  window.addEventListener('resize', checkIsMobileAndRemoveBlockScreen);
  window.addEventListener('resize', checkIsMobileAndCloseMobileNavigation);
});
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full p-3 bg-sky-50">
    <div class="flex justify-between items-center">
      <RouterLink :to="RoutesPathEnum.home">
        <BaseLogotype />
      </RouterLink>

      <TheNavigation v-if="!isMobile" />
      <TheNavigationMobile :is-open="isMobileNavigation" />
      <TheButtonBurger v-if="isMobile" @click="onClickBurger" />
    </div>
  </header>
</template>
