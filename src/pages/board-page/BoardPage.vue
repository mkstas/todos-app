<script setup lang="ts">
import { VSheet } from '@/shared/ui';
import { CreateTask, Sidebar, TaskList } from '@/widgets';
</script>

<template>
  <VSheet class="w-full max-w-5xl h-[32rem] grid grid-cols-[12rem_1fr]">
    <Sidebar />
    <main>
      <CreateTask />
      <TaskList />
    </main>
  </VSheet>
</template>
