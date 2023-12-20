<script lang="ts" setup>
import { RoutesNameEnum } from '@/shared/typicode';
import { BaseButtonDelete } from '@/shared/uilib';

import { TaskGroupItemPropsType } from './TaskGroupItem.types';

defineProps<TaskGroupItemPropsType>();

const emit = defineEmits(['delete-task-group']);
</script>

<template>
  <li class="flex items-center gap-2">
    <RouterLink
      class="flex-1 px-2 py-1 hover:bg-gray-200 rounded-md text-base font-medium"
      :to="{
        name: RoutesNameEnum.tasks,
        params: {
          id: taskGroup.id,
        },
      }"
    >
      {{ taskGroup.title }}
    </RouterLink>
    <BaseButtonDelete @click="emit('delete-task-group')" />
  </li>
</template>
