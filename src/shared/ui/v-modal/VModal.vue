<script setup lang="ts">
import { Ref, ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { IProps } from './VModal.types';

defineProps<IProps>();

const overlay: Ref<HTMLElement | null> = ref(null);
const closeButton: Ref<HTMLElement | null> = ref(null);

const emit = defineEmits(['close-modal']);

const onClick = (event: Event) => {
  if (
    event.target === overlay.value ||
    (event.target as HTMLElement).closest('#close-button') === closeButton.value
  ) {
    emit('close-modal');
  }
};
</script>

<template>
  <div
    class="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center py-8 bg-slate-800/10 shadow-lg shadow-slate-500/10"
    ref="overlay"
    @click="onClick"
  >
    <div class="w-full max-w-md px-6 py-4 space-y-4 bg-white rounded-lg">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-medium">{{ title }}</h3>
        <button
          class="-mr-2 p-2 rounded-lg outline-none focus-visible:outline-zinc-800"
          id="close-button"
          ref="closeButton"
        >
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
