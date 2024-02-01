<script setup lang="ts">
import { IProps } from './VButton.types';
import { classes } from './VButton.config';

withDefaults(defineProps<IProps>(), {
  content: 'text',
  variant: 'blue',
});
</script>

<template>
  <button :class="classes(content, variant)">
    <slot></slot>
  </button>
</template>
