<script setup lang="ts">
import { Ref, ref } from 'vue';
import { VButtonClose } from '@/components/ui';

defineProps<{
  title?: string;
}>();

const overlay = ref(null);
const closeButton: Ref<InstanceType<typeof VButtonClose> | null> = ref(null);

const emit = defineEmits(['close-modal']);

const onCloseModal = (event: Event) => {
  if (
    event.target === overlay.value ||
    (event.target as HTMLElement).closest('#close-button') ===
      closeButton.value?.instance
  ) {
    emit('close-modal');
  }
};
</script>

<template>
  <div
    class="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center py-8 bg-black/20"
    ref="overlay"
    @click="onCloseModal"
  >
    <div class="w-full max-w-md px-6 py-4 space-y-4 bg-white rounded-lg">
      <header class="flex justify-between items-center">
        <h3 class="text-lg font-medium">{{ title }}</h3>
        <VButtonClose class="-mr-2" id="close-button" ref="closeButton" />
      </header>
      <slot></slot>
    </div>
  </div>
</template>
