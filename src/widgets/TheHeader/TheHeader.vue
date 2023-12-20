<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';
import { BaseLogotype } from '@/shared/uilib';

import { TheNavigation } from '@/features/TheNavigation';
import { TheNavigationMobile } from '@/features/TheNavigationMobile';
import { TheButtonBurger } from '@/features/TheButtonBurger';

import { useNavigation } from './lib/useNavigation';

const {
  isMobile,
  isMobileNavigation,
  toggleMobileNavigationAndToggleBlockScreen,
  initNavigation,
} = useNavigation();

initNavigation();
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full p-3 bg-sky-50">
    <div class="flex justify-between items-center">
      <RouterLink :to="RoutesPathEnum.home">
        <BaseLogotype />
      </RouterLink>

      <TheNavigation v-if="!isMobile" />
      <TheButtonBurger
        v-if="isMobile"
        @click="toggleMobileNavigationAndToggleBlockScreen"
      />
      <TheNavigationMobile v-if="isMobile" :is-open="isMobileNavigation" />
    </div>
  </header>
</template>
