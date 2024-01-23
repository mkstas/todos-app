<script setup lang="ts">
import { ClipboardDocumentCheckIcon } from '@heroicons/vue/24/solid';
import { RoutesPath } from '@/shared/types';
import { ButtonBurger, VContainer } from '@/shared/ui-kit';
import { NavigationDesktop, NavigationMobile } from '@/features';
import { useMobileMenu } from './useMobileMenu';

const {
  isMobileScreen,
  isMobileMenu,
  toggleMobileMenuAndBlockScreen,
  initMobileMenu,
} = useMobileMenu();

initMobileMenu();
</script>

<template>
  <header class="py-3 fixed t-0 left-0 z-50 w-full bg-white">
    <VContainer>
      <nav class="flex items-center relative">
        <RouterLink
          class="flex items-center gap-3 drop-shadow-md shadow-gray-800/15"
          :to="RoutesPath.welcome"
        >
          <ClipboardDocumentCheckIcon class="w-10 h-10 text-blue-500" />
          <span class="text-2xl font-semibold text-gray-800">TaskTracker</span>
        </RouterLink>

        <div class="ml-auto flex items-center">
          <ButtonBurger
            v-if="isMobileScreen"
            @click="toggleMobileMenuAndBlockScreen"
            class="absolute -right-2 z-20"
          />

          <NavigationDesktop v-if="!isMobileScreen" />
          <NavigationMobile v-if="isMobileScreen" v-show="isMobileMenu" />
        </div>
      </nav>
    </VContainer>
  </header>
</template>
