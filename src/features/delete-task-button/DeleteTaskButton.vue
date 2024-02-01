<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline';
import { VButton } from '@/shared/ui';
import { useTaskStore } from '@/entities/task';
import { IProps } from './DeleteTaskButton.types';

defineProps<IProps>();

const taskStore = useTaskStore();
</script>

<template>
  <VButton content="icon" variant="red" @click="taskStore.deleteTask(id)">
    <TrashIcon class="w-4 h-4" />
  </VButton>
</template>
