<script lang="ts" setup>
import { Modal } from '@/shared/uilib';

import { TaskModalForm } from './TaskModalForm';

const emit = defineEmits(['close-modal']);
</script>

<template>
  <Modal title="Создание задачи" @close="emit('close-modal')">
    <TaskModalForm @close-modal="emit('close-modal')" />
  </Modal>
</template>
