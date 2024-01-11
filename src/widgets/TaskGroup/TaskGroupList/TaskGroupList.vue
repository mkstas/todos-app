<script lang="ts" setup>
import { onMounted } from 'vue';

import { useTaskGroupStore } from '@/entities/taskGroup';

import { TaskGroupItem } from '../TaskGroupItem';

const taskGroupStore = useTaskGroupStore();

const onDeleteTaskGroup = (id: string) => {
  taskGroupStore.deleteAndRemoveTaskGroup(id);
};

onMounted(async () => {
  await taskGroupStore.getAndSetTaskGroups();
});
</script>

<template>
  <ul class="grid gap-2">
    <TaskGroupItem
      v-for="taskGroup in taskGroupStore.taskGroups"
      :key="taskGroup.id"
      :task-group="taskGroup"
      @delete-task-group="onDeleteTaskGroup(taskGroup.id)"
    />
  </ul>
</template>
