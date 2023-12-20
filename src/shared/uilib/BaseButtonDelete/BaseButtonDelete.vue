<script lang="ts" setup>
import { TrashIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <button
    class="p-[0.375rem] rounded-md outline-none bg-red-500 hover:bg-red-600 focus-visible:outline-red-800 active:bg-red-400 transition-colors shadow-md shadow-gray-800/15"
  >
    <TrashIcon class="w-5 h-5 text-white" />
  </button>
</template>
