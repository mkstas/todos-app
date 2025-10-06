<script setup lang="ts">
import { IProps } from './GroupItem.types';

defineProps<IProps>();
</script>

<template>
  <a
    class="inline-block rounded-xl px-4 py-2 text-lg transition-colors outline-none hover:bg-slate-100 focus-visible:bg-slate-100"
    :href="`#${group.id}`"
  >
    {{ group.title }}
  </a>
</template>
