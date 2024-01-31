<script setup lang="ts">
import { Ref, onMounted, provide, ref } from 'vue';
import { TheSidebar } from '@/components/layout/the-sidebar';
import { TheContent } from '@/components/layout/the-content';
import { useGroup, useTask } from '@/composables';

const urlHash: Ref<string> = ref(window.location.hash.slice(1));

const { groups, getGroups, storeGroup } = useGroup();
const { tasks, getTasks, storeTask, updateTask, deleteTask } = useTask();

provide('groups', groups);
provide('tasks', tasks);
provide('url-hash', urlHash);
provide('store-group', storeGroup);
provide('store-task', storeTask);
provide('update-task', updateTask);
provide('delete-task', deleteTask);

onMounted(() => {
  getGroups();
  getTasks(urlHash.value);

  const isUrlHash = groups.value.find(group => group.id === urlHash.value);
  if (!isUrlHash) {
    urlHash.value = '';
  }
  window.addEventListener('hashchange', () => {
    urlHash.value = window.location.hash.slice(1);
    const isUrlHash = groups.value.find(group => group.id === urlHash.value);
    if (!isUrlHash) {
      urlHash.value = '';
    }
    getTasks(urlHash.value);
  });
});
</script>

<template>
  <div class="min-h-screen py-16 flex items-center justify-center bg-slate-50">
    <div
      class="w-full max-w-5xl h-[32rem] grid grid-cols-[16rem_1fr] bg-white border border-slate-200 rounded-lg shadow-lg shadow-slate-500/10"
    >
      <TheSidebar />
      <TheContent />
    </div>
  </div>
</template>
