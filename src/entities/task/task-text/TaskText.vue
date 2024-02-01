<script setup lang="ts">
import { IProps } from './TaskText.types';

defineProps<IProps>();
</script>

<template>
  <p class="text-lg">{{ text }}</p>
</template>
