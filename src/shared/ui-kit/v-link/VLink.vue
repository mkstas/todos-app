<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { VLinkPropsType } from './VLink.types';

defineProps<VLinkPropsType>();
</script>

<template>
  <RouterLink :to="to" class="text-blue-500 hover:text-blue-600 underline">
    <slot></slot>
  </RouterLink>
</template>
