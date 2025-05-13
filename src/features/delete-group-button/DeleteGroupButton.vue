<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline';
import { VButton } from '@/shared/ui';
import { useGroupStore } from '@/entities/group';
import { IProps } from './DeleteGroupButton.types';

defineProps<IProps>();

const groupStore = useGroupStore();
</script>

<template>
  <VButton content="icon" variant="red" @click="groupStore.deleteGroup(id)">
    <TrashIcon class="h-4 w-4" />
  </VButton>
</template>
