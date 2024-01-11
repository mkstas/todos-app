<script lang="ts" setup>
import { ButtonBurger } from '@/shared/uilib';

import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';

import { useNavigation } from './useNavigation';

const {
  isMobile,
  isMobileNavigationOpen,
  toggleMobileNavigationAndToggleBlockScreen,
  initNavigation,
} = useNavigation();

initNavigation();
</script>

<template>
  <div class="flex items-center">
    <NavigationDesktop v-if="!isMobile" />
    <ButtonBurger
      v-if="isMobile"
      @click="toggleMobileNavigationAndToggleBlockScreen"
    />
    <NavigationMobile v-if="isMobile" :is-open="isMobileNavigationOpen" />
  </div>
</template>
