<script setup lang="ts">
import { IProps } from './TaskText.types';

defineProps<IProps>();
</script>

<template>
  <p class="pt-0.5 text-lg">{{ text }}</p>
</template>
