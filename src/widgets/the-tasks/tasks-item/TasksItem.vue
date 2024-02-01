<script setup lang="ts">
import { useModal } from '@/shared/utils';
import { TaskText } from '@/entities/task';
import { DeleteTaskButton } from '@/features/delete-task-button';
import { EditTaskButton } from '@/features/edit-task-button';
import { EditTaskModal } from '@/features/edit-task-modal';
import { IProps } from './TasksItem.types';

defineProps<IProps>();

const { isOpenModal, openModal, closeModal } = useModal();
</script>

<template>
  <li class="flex gap-2 py-2">
    <TaskText class="flex-1" :text="task.text" />
    <div class="flex gap-2">
      <EditTaskButton @click="openModal" />
      <DeleteTaskButton :id="task.id" />
    </div>
    <EditTaskModal v-if="isOpenModal" :task="task" @close-modal="closeModal" />
  </li>
</template>
