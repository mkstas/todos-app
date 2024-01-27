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
  red: 'button-red',
  green: 'button-green',
  blue: 'button-blue',
};

const classes = computed(() => `button ${buttonVariants[props.variant]}`);
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  @apply px-3 py-2 outline-none rounded-lg text-white;
  &-red {
    @apply bg-red-500 hover:bg-red-600 focus-visible:outline-red-700;
  }
  &-green {
    @apply bg-green-500 hover:bg-green-600 focus-visible:outline-green-700;
  }
  &-blue {
    @apply bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-700;
  }
}
</style>
