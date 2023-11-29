<script lang="ts" setup>
import { ComponentPublicInstance, ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const button = ref<ComponentPublicInstance | null>(null);

defineExpose({ button });
</script>

<template>
  <button
    class="p-1 outline-none rounded-full bg-red-500 hover:bg-red-600 focus-visible:bg-red-600 active:bg-red-400 transition-colors"
    ref="button"
  >
    <XMarkIcon class="text-white w-5 h-5" />
  </button>
</template>
