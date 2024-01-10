<script lang="ts" setup>
import { Ref, ref } from 'vue';

import { ButtonClose, Heading, HeadingEnum } from '@/shared/uilib';

import { ModalPropsType } from './Modal.types';

defineProps<ModalPropsType>();

const emits = defineEmits(['close']);

const overlay: Ref<HTMLBaseElement | null> = ref(null);
const closeButton: Ref<InstanceType<typeof ButtonClose> | null> = ref(null);

const onCloseModal = (event: Event) => {
  if (
    event.target === overlay.value ||
    (event.target as HTMLBaseElement).closest('#close') ===
      closeButton.value?.button
  ) {
    emits('close');
  }
};
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/80"
    ref="overlay"
    @click="onCloseModal"
  >
    <div
      class="rounded-md bg-white shadow-md shadow-gray-800/15 py-3 px-4 w-full max-w-lg grid gap-4"
    >
      <div class="flex justify-between items-center gap-4">
        <Heading :type="HeadingEnum.h2">{{ title }}</Heading>
        <ButtonClose id="close" ref="closeButton" />
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
