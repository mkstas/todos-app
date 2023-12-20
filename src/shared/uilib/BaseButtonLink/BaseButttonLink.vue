<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import {
  BaseButtonLinkPropsType,
  BaseButtonLinkSizeEnum,
} from './BaseButtonLink.types';

const props = withDefaults(defineProps<BaseButtonLinkPropsType>(), {
  size: BaseButtonLinkSizeEnum.md,
});

const classes = [
  'inline-block py-2 px-6 outline-none bg-sky-500 hover:bg-sky-600 active:bg-sky-400 disabled:bg-sky-300 disabled:cursor-not-allowed focus-visible:outline-sky-800 shadow-md shadow-gray-800/15 transition-colors rounded-md text-center font-semibold text-white',
  props.size,
];
</script>

<template>
  <RouterLink :class="classes" :to="to">
    <slot></slot>
  </RouterLink>
</template>
