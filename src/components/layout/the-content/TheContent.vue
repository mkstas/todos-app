<script setup lang="ts">
import { computed } from 'vue';
import { ClipboardDocumentListIcon } from '@heroicons/vue/24/outline';
import { TaskFormCreate, TaskList } from '@/components/task';
import { useHashUrl } from '@/composables';
import { useGroupStore } from '@/stores';

const { groups } = useGroupStore();
const { hashUrl, isValidHashUrl } = useHashUrl();

const title = computed(
  () => groups.find(group => group.id === hashUrl.value)?.title,
);
</script>

<template>
  <main class="p-4">
    <div v-if="isValidHashUrl" class="space-y-4">
      <h1 class="text-xl font-semibold">{{ title }}</h1>
      <TaskFormCreate />
      <TaskList />
    </div>
    <div v-else class="h-full flex items-center justify-center">
      <ClipboardDocumentListIcon class="w-32 h-32 text-slate-200" />
    </div>
  </main>
</template>
