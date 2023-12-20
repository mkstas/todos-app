<script lang="ts" setup>
import { BaseButtonPropsType, BaseButtonSizeEnum } from './BaseButton.types';

const props = withDefaults(defineProps<BaseButtonPropsType>(), {
  size: BaseButtonSizeEnum.md,
});

const classes = [
  'inline-block py-2 px-6 outline-none bg-sky-500 hover:bg-sky-600 active:bg-sky-400 disabled:bg-sky-300 disabled:cursor-not-allowed focus-visible:outline-sky-800 shadow-md shadow-gray-800/15 transition-colors rounded-lg text-center font-semibold text-white',
  props.size,
];
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
