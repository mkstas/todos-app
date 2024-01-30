<script setup lang="ts">
import { Ref, onMounted, provide, ref } from 'vue';
import { IGroup, ITask } from '@/types';
import { TheSidebar } from '@/components/layout/the-sidebar';
import { TheContent } from '@/components/layout/the-content';

const groups: Ref<IGroup[]> = ref([]);
const tasks: Ref<ITask[]> = ref([]);
const urlHash: Ref<string> = ref(window.location.hash.slice(1));

const getGroups = () => {
  if (localStorage.getItem('groups')) {
    groups.value = JSON.parse(localStorage.getItem('groups') as string);
  } else {
    localStorage.setItem('groups', JSON.stringify([]));
  }
};

const storeGroup = (title: string) => {
  groups.value.push({ id: Date.now().toString(), title });
  localStorage.setItem('groups', JSON.stringify(groups.value));
};

const getTasks = (groupId: string) => {
  if (localStorage.getItem('tasks')) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') as string);
    const filteredTasks = savedTasks.filter(task => task.groupId === groupId);
    tasks.value = filteredTasks;
  } else {
    localStorage.setItem('tasks', JSON.stringify([]));
  }
};

const storeTask = (groupId: string, text: string) => {
  tasks.value.push({ id: Date.now().toString(), groupId, text, status: false });
  const savedTasks = JSON.parse(localStorage.getItem('tasks') as string);
  savedTasks.push({
    id: Date.now().toString(),
    groupId,
    text,
    status: false,
  });
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
};

const updateTask = (id: string, ...values: Array<{}>) => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks') as string);
  for (let i = 0; i < savedTasks.length; i++) {
    if (savedTasks[i].id === id) {
      Object.assign(savedTasks[i], values[0]);
      for (let j = 0; j < tasks.value.length; j++) {
        if (tasks.value[j].id === id) {
          Object.assign(tasks.value[i], values[0]);
        }
      }
    }
  }
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
};

const deleteTask = (id: string) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
  const savedTasks = JSON.parse(localStorage.getItem('tasks') as string);
  const updatedTasks = savedTasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

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

  window.addEventListener('hashchange', () => {
    urlHash.value = window.location.hash.slice(1);
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
