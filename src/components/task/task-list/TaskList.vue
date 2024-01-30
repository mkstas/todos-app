<script setup lang="ts">
import { inject } from 'vue';
import { VButtonIcon } from '@/components/ui';
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { TaskEditModal } from '..';
import { useModal } from '@/composables';

const { isOpenModal, openModal, closeModal } = useModal();

const tasks = inject('tasks');
const deleteTask = inject('delete-task');
</script>

<template>
  <ul class="divide-y divide-zinc-200">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="flex justify-between items-center gap-4 py-2"
    >
      <p class="text-lg">{{ task.text }}</p>
      <div class="flex gap-2">
        <VButtonIcon @click="openModal">
          <PencilIcon class="w-4 h-4" />
        </VButtonIcon>
        <VButtonIcon variant="red" @click="deleteTask(task.id)">
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
