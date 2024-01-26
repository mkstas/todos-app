<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import { ClipboardDocumentListIcon } from '@heroicons/vue/24/outline';
import { VSheet } from '@/shared/ui';
import { TaskForm, Sidebar, TaskList } from '@/widgets';

const hash: Ref<string> = ref('');

onMounted(() => {
  hash.value = window.location.hash.slice(1);
});

window.addEventListener('hashchange', () => {
  hash.value = window.location.hash.slice(1);
});
</script>

<template>
  <VSheet class="w-full max-w-5xl h-[32rem] grid grid-cols-[12rem_1fr]">
    <Sidebar />
    <main>
      <template v-if="hash">
        <TaskForm />
        <TaskList />
      </template>
      <div v-else class="h-full flex items-center justify-center">
        <ClipboardDocumentListIcon class="w-32 h-32 text-zinc-300" />
      </div>
    </main>
  </VSheet>
</template>
