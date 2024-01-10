<script lang="ts" setup>
import { PlusCircleIcon } from '@heroicons/vue/24/outline';

import { BaseButtonAddPropsType } from './BaseButtonAdd.types';

defineProps<BaseButtonAddPropsType>();
</script>

<template>
  <button
    class="flex items-center gap-2 w-full p-2 hover:bg-gray-200 rounded-md"
  >
    <PlusCircleIcon class="w-5 h-5 text-gray-600" />
    <span class="text-gray-600">{{ label }}</span>
  </button>
</template>
