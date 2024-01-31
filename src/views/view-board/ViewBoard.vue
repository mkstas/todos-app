<script setup lang="ts">
import { onMounted } from 'vue';
import { TheSidebar } from '@/components/layout/the-sidebar';
// import { TheContent } from '@/components/layout/the-content';
import { useGroupStore } from '@/stores';
// import { useGroup, useTask, useUrlHash } from '@/composables';

// const { groups, getGroups, storeGroup } = useGroup();
const { getGroups } = useGroupStore();
// const { tasks, getTasks, storeTask, updateTask, deleteTask } = useTask();
// const { urlHash, isUrlHashValid } = useUrlHash();

onMounted(() => {
  getGroups();
  // getTasks(urlHash.value);

  // window.addEventListener('hashchange', () => {
  //   urlHash.value = location.hash.slice(1);

  //   if (isUrlHashValid) {
  //     getTasks(urlHash.value);
  //   }
  // });
});
</script>

<template>
  <div class="min-h-screen py-16 flex items-center justify-center bg-slate-50">
    <div
      class="w-full max-w-5xl h-[32rem] grid grid-cols-[16rem_1fr] bg-white border border-slate-200 rounded-lg shadow-lg shadow-slate-500/10"
    >
      <TheSidebar />
      <!-- <TheContent /> -->
    </div>
  </div>
</template>
