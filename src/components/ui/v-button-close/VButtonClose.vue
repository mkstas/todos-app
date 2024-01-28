<script setup lang="ts">
import { ComponentPublicInstance, Ref, ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const instance: Ref<ComponentPublicInstance | null> = ref(null);

defineExpose({ instance });
</script>

<template>
  <button
    class="p-2 rounded-lg outline-none focus-visible:outline-zinc-800"
    ref="instance"
  >
    <XMarkIcon class="w-6 h-6" />
  </button>
</template>
