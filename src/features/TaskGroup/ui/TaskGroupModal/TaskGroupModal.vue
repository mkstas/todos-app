<script lang="ts" setup>
import { BaseModal } from '@/shared/uilib';

import { TaskGroupForm } from '../TaskGroupForm';

const emit = defineEmits(['close-modal']);
</script>

<template>
  <BaseModal title="Новая группа задач" @close="() => emit('close-modal')">
    <TaskGroupForm @close-modal="emit('close-modal')" />
  </BaseModal>
</template>
