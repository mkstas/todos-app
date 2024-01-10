<script lang="ts" setup>
import { BaseButtonAdd } from '@/shared/uilib';
import { useOpenModal } from '@/shared/utils';

import { TaskModal } from '@/features/TaskModal';

const { isOpenModal, openModal, closeModal } = useOpenModal();
</script>

<template>
  <BaseButtonAdd
    class="justify-center"
    label="Новая задача"
    @click="openModal"
  />
  <TaskModal v-if="isOpenModal" @close-modal="closeModal()" />
</template>
