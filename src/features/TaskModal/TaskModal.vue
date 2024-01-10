<script lang="ts" setup>
import { BaseModal } from '@/shared/uilib';

import { TaskModalForm } from './TaskModalForm';

const emit = defineEmits(['close-modal']);
</script>

<template>
  <BaseModal title="Создание задачи" @close="emit('close-modal')">
    <TaskModalForm @close-modal="emit('close-modal')" />
  </BaseModal>
</template>
