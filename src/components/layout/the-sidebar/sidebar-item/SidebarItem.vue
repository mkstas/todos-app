<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
}>();
</script>

<template>
  <li>
    <a
      class="px-3 py-2 block font-medium rounded-lg outline-none hover:bg-slate-200 focus-visible:bg-slate-200"
      :href="`#${id}`"
      >{{ title }}</a
    >
  </li>
</template>
