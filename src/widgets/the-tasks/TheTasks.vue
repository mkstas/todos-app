<script setup lang="ts">
import { computed } from 'vue';
import { ClipboardDocumentListIcon } from '@heroicons/vue/24/outline';
import { useHashUrl } from '@/shared/utils';
import { useGroupStore } from '@/entities/group';
import { useTaskStore } from '@/entities/task';
import { CreateTaskForm } from '@/features/create-task-form';
import { TasksItem } from './tasks-item';

const { hashUrl } = useHashUrl();
const groupStore = useGroupStore();
const taskStore = useTaskStore();

const isGroupValid = computed(() => !!groupStore.groups.find(group => group.id === hashUrl.value));

const title = computed(() => groupStore.groups.find(group => group.id === hashUrl.value)?.title);
</script>

<template>
  <section v-if="isGroupValid" class="space-y-4">
    <h2 class="text-lg font-semibold">{{ title }}</h2>
    <CreateTaskForm />
    <ul class="divide-y divide-zinc-200">
      <TasksItem v-for="task in taskStore.tasks" :key="task.id" :task="task" />
    </ul>
  </section>
  <div v-else class="flex h-full items-center justify-center">
    <ClipboardDocumentListIcon class="h-20 w-20 text-slate-200 md:h-32 md:w-32" />
  </div>
</template>
