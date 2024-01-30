<script setup lang="ts">
import { inject, computed } from 'vue';
import { CreateTaskForm, TaskList } from '@/components/task';
import { ClipboardDocumentListIcon } from '@heroicons/vue/24/outline';

const groups = inject('groups');
const urlHash = inject('url-hash');

const title = computed(
  () => groups.value.find(group => group.id === urlHash.value)?.title,
);
</script>

<template>
  <main class="p-4">
    <div v-if="urlHash" class="space-y-4">
      <h1 class="text-xl font-semibold">{{ title }}</h1>
      <CreateTaskForm />
      <TaskList />
    </div>
    <div v-else class="h-full flex items-center justify-center">
      <ClipboardDocumentListIcon class="w-32 h-32 text-slate-200" />
    </div>
  </main>
</template>
