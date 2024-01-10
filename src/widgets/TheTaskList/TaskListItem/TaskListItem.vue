<script lang="ts" setup>
import { PencilSquareIcon } from '@heroicons/vue/24/outline';

import { TaskListItemPropsType } from './TaskListItem.types';

defineProps<TaskListItemPropsType>();
</script>

<template>
  <div class="py-2 flex gap-4 justify-between items-center">
    <h3 class="text-lg font-medium">
      {{ task.title }}
    </h3>
    <button class="p-2 hover:bg-gray-200 rounded-md">
      <PencilSquareIcon class="h-5 w-5 text-gray-600" />
    </button>
  </div>
</template>
