<script setup lang="ts">
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { VButtonIcon } from '@/components/ui';
import { TaskEditModal } from '@/components/task';
import { useModal } from '@/composables';
import { useTaskStore } from '@/stores';

const { isOpenModal, openModal, closeModal } = useModal();
const taskStore = useTaskStore();
</script>

<template>
  <ul class="divide-y divide-zinc-200">
    <li
      v-for="task in taskStore.tasks"
      :key="task.id"
      class="flex justify-between items-center gap-4 py-2"
    >
      <p class="text-lg">{{ task.value }}</p>
      <div class="flex gap-2">
        <VButtonIcon @click="openModal">
          <PencilIcon class="w-4 h-4" />
        </VButtonIcon>
        <VButtonIcon variant="red" @click="taskStore.deleteTask(task.id)">
          <TrashIcon class="w-4 h-4" />
        </VButtonIcon>
      </div>
      <TaskEditModal
        v-if="isOpenModal"
        :task="task"
        @close-modal="closeModal"
      />
    </li>
  </ul>
</template>
