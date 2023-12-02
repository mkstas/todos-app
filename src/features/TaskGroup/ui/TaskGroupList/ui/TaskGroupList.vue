<script lang="ts" setup>
import { onMounted } from 'vue';

import { RoutesNameEnum } from '@/shared/typicode';
import { BaseButtonDelete } from '@/shared/uilib';

import { useTasksGroupStore } from '@/entities/tasksGroup';

const { taskGroups, getAndSetTaskGroups } = useTasksGroupStore();

onMounted(async () => {
  await getAndSetTaskGroups();
});
</script>

<template>
  <ul>
    <li v-for="item in taskGroups" :key="item.id">
      <RouterLink
        :to="{
          name: RoutesNameEnum.tasks,
          params: {
            id: item.id,
          },
        }"
      >
        {{ item.title }}
      </RouterLink>
      <BaseButtonDelete />
    </li>
  </ul>
</template>
