<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  to: string;
}>();
</script>

<template>
  <RouterLink :to="to" class="text-blue-500 hover:text-blue-600 underline">
    <slot></slot>
  </RouterLink>
</template>
