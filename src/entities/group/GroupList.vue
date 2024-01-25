<script setup lang="ts">
import { useGroup } from './useGroup';

const { groups } = useGroup();
</script>

<template>
  <ul>
    <li v-for="group in groups" :key="group.title" class="text-white">
      <a
        :href="`#${group.title}`"
        class="block py-2 px-3 bg-zinc-700 hover:bg-zinc-800 focus:bg-zinc-800 text-start outline-none rounded"
      >
        {{ group.title }}
      </a>
    </li>
  </ul>
</template>
