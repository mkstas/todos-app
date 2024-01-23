<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = withDefaults(
  defineProps<{
    to: string;
    size?: string;
    color?: string;
  }>(),
  {
    size: 'md',
    color: 'blue',
  },
);

const sizes: { [key: string]: string } = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-base',
  lg: 'py-2 px-8 text-lg',
};

const colors: { [key: string]: string } = {
  blue: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-400 focus-visible:outline-blue-800',
  green:
    'bg-green-500 hover:bg-green-600 active:bg-green-400 focus-visible:outline-green-800',
  red: 'bg-red-500 hover:bg-red-600 active:bg-red-400 focus-visible:outline-red-800',
  yellow:
    'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-400 focus-visible:outline-yellow-800',
};

const classes = [
  'inline-block transition-colors outline-none rounded-md shadow-md shadow-gray-800/15 text-white',
  sizes[props.size],
  colors[props.color],
];
</script>

<template>
  <RouterLink :to="to" :class="classes">
    <slot></slot>
  </RouterLink>
</template>
