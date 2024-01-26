<script setup lang="ts">
import { VSheet } from '@/shared/ui';
import { TaskForm, Sidebar, TaskList } from '@/widgets';
</script>

<template>
  <VSheet class="w-full max-w-5xl h-[32rem] grid grid-cols-[12rem_1fr]">
    <Sidebar />
    <main>
      <TaskForm />
      <TaskList />
    </main>
  </VSheet>
</template>
