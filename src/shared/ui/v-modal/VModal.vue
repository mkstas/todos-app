<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';

defineProps<{ heading: string }>();
</script>

<template>
  <div
    class="flex justify-center items-center absolute w-full h-full bg-black/50 z-50"
  >
    <div
      class="bg-white shadow shadow-zinc-600/50 rounded max-w-lg w-full divide-y divide-zinc-300"
    >
      <div class="flex p-4">
        <p class="flex-1 items-start text-lg">{{ heading }}</p>
        <button class="bg-red-500 p-1 rounded-full shadow shadow-zinc-300/50">
          <XMarkIcon class="w-5 h-5 text-white" />
        </button>
      </div>
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
