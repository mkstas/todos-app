<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: string;
  }>(),
  {
    variant: 'blue',
  },
);

const buttonVariants: { [key: string]: string } = {
  red: 'bg-red-500 hover:bg-red-600 focus-visible:outline-red-700',
  green: 'bg-green-500 hover:bg-green-600 focus-visible:outline-green-700',
  blue: 'bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-700',
};

const classes = computed(
  () =>
    `p-2 outline-none rounded-lg text-white
    ${buttonVariants[props.variant]}`,
);
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
