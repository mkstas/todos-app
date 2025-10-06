<script setup lang="ts">
import { Ref, ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { IProps } from './VModal.types';

defineProps<IProps>();

const overlay: Ref<HTMLElement | null> = ref(null);
const closeButton: Ref<HTMLElement | null> = ref(null);

const emit = defineEmits(['close-modal']);

const onClick = (event: Event) => {
  if (event.target === overlay.value || (event.target as HTMLElement).closest('#close-button') === closeButton.value) {
    emit('close-modal');
  }
};
</script>

<template>
  <div
    class="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-slate-800/10 py-8"
    ref="overlay"
    @click="onClick"
  >
    <div class="w-full max-w-xl space-y-4 rounded-2xl bg-white px-6 py-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-medium">{{ title }}</h3>
        <button
          class="-mr-2 cursor-pointer rounded-xl p-2 outline-offset-3 outline-zinc-800 transition-colors outline-none hover:bg-slate-100 focus-visible:bg-slate-100"
          id="close-button"
          ref="closeButton"
        >
          <XMarkIcon class="h-6 w-6" />
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
