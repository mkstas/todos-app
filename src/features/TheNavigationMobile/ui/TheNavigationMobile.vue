<script lang="ts" setup>
import { computed } from 'vue';

import { RoutesPathEnum } from '@/shared/typicode';

import { TheNaviagationMobilePropsType } from './TheNavigationMobile.types';

const props = defineProps<TheNaviagationMobilePropsType>();

const classNavTranslate = computed(() =>
  props.isOpen ? 'translate-y-0' : '-translate-y-full',
);
</script>

<template>
  <nav
    :class="`fixed z-10 top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm transition-transform ${classNavTranslate}`"
  >
    <ul class="pt-16 pb-11 px-11 bg-white">
      <li>
        <RouterLink
          class="block p-4 text-lg font-medium hover:text-sky-500 transition-colors"
          :to="RoutesPathEnum.signin"
        >
          Вход
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="block p-4 text-lg font-medium hover:text-sky-500 transition-colors"
          :to="RoutesPathEnum.signup"
        >
          Регистрация
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
