<script setup lang="ts">
import { IProps } from './GroupItem.types';

defineProps<IProps>();
</script>

<template>
  <a
    class="inline-block px-3 py-2 rounded-lg outline-none hover:bg-slate-200 focus-visible:bg-slate-200 text-lg"
    :href="`#${group.id}`"
  >
    {{ group.title }}
  </a>
</template>
