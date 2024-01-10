<script lang="ts" setup>
import { ComponentPublicInstance, ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const button = ref<ComponentPublicInstance | null>(null);

defineExpose({ button });
</script>

<template>
  <button
    class="p-1 outline-none rounded-full bg-red-500 hover:bg-red-600 focus-visible:outline-red-800 active:bg-red-400 transition-colors shadow-md shadow-gray-800/15"
    ref="button"
  >
    <XMarkIcon class="w-4 h-4 text-white" />
  </button>
</template>
