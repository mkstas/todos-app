<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { BaseButtonLinkPropsType } from './BaseButtonLink.types';

defineProps<BaseButtonLinkPropsType>();
</script>

<template>
  <RouterLink
    class="inline-block py-2 px-6 rounded-2xl bg-sky-500 outline-none hover:bg-sky-600 active:bg-sky-400 disabled:bg-sky-300 disabled:cursor-not-allowed focus-visible:bg-sky-600 transition-colors text-white text-center text-base font-medium shadow-md shadow-gray-800/15"
    :to="to"
  >
    <slot></slot>
  </RouterLink>
</template>
