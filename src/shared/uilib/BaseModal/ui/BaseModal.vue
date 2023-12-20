<script lang="ts" setup>
import { Ref, ref } from 'vue';

import { BaseButtonClose, BaseHeading, BaseHeadingEnum } from '@/shared/uilib';

import { BaseModalPropsType } from './BaseModal.types';

defineProps<BaseModalPropsType>();

const emits = defineEmits(['close']);

const overlay: Ref<HTMLBaseElement | null> = ref(null);
const closeButton: Ref<InstanceType<typeof BaseButtonClose> | null> = ref(null);

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
      class="rounded-lg bg-white shadow-md shadow-gray-800/15 py-3 px-4 w-full max-w-lg grid gap-4"
    >
      <div class="flex justify-between items-center gap-4">
        <BaseHeading :type="BaseHeadingEnum.h2">{{ title }}</BaseHeading>
        <BaseButtonClose id="close" ref="closeButton" />
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
