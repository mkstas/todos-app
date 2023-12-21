<script lang="ts" setup>
import { onMounted } from 'vue';

import { useTaskGroupsStore } from '@/entities/taskGroups';

import { TaskGroupItem } from '../TaskGroupItem';

const taskGroupsStore = useTaskGroupsStore();

const onDeleteTaskGroup = (id: string) => {
  taskGroupsStore.deleteAndRemoveTaskGroup(id);
};

onMounted(async () => {
  await taskGroupsStore.getAndSetTaskGroups();
});
</script>

<template>
  <ul class="grid gap-2">
    <TaskGroupItem
      v-for="taskGroup in taskGroupsStore.taskGroups"
      :key="taskGroup.id"
      :task-group="taskGroup"
      @delete-task-group="onDeleteTaskGroup(taskGroup.id)"
    />
  </ul>
</template>
