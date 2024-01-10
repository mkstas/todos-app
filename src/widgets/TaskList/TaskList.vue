<script lang="ts" setup>
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useTaskStore } from '@/entities/task';

import { TaskListItem } from './TaskListItem';
import { TaskListCreate } from './TaskListCreate';

const route = useRoute();
const taskStore = useTaskStore();

onMounted(
  async () => await taskStore.getAndSetTasks(route.params.id as string),
);

watch(
  () => route.params.id,
  async () => await taskStore.getAndSetTasks(route.params.id as string),
);
</script>

<template>
  <div class="grid gap-2">
    <div class="divide-y divide-slate-200">
      <TaskListItem
        v-for="task in taskStore.tasks"
        :key="task.taskGroupId"
        :task="task"
      />
    </div>
    <TaskListCreate />
  </div>
</template>
