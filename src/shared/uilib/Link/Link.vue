<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { LinkPropsType } from './Link.types';

defineProps<LinkPropsType>();
</script>

<template>
  <RouterLink class="inline-block text-sky-500 underline text-sm" :to="to">
    <slot></slot>
  </RouterLink>
</template>
