<script lang="ts" setup>
import { Modal } from '@/shared/uilib';

import { TaskGroupForm } from '../TaskGroupForm';

const emit = defineEmits(['close-modal']);
</script>

<template>
  <Modal title="Новая группа задач" @close="emit('close-modal')">
    <TaskGroupForm @close-modal="emit('close-modal')" />
  </Modal>
</template>
