<script lang="ts" setup>
import { ButtonAdd } from '@/shared/uilib';
import { useOpenModal } from '@/shared/utils';

import { TaskModal } from '../TaskModal';

const { isOpenModal, openModal, closeModal } = useOpenModal();
</script>

<template>
  <ButtonAdd class="justify-center" label="Новая задача" @click="openModal" />
  <TaskModal v-if="isOpenModal" @close-modal="closeModal()" />
</template>
