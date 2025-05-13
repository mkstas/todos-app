<script setup lang="ts">
import { IProps } from './GroupItem.types';

defineProps<IProps>();
</script>

<template>
  <a
    class="inline-block rounded-lg px-3 py-2 text-lg transition-colors outline-none hover:bg-slate-200 focus-visible:bg-slate-200"
    :href="`#${group.id}`"
  >
    {{ group.title }}
  </a>
</template>
