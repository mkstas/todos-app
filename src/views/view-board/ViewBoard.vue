<script setup lang="ts">
import { TheSidebar } from '@/components/layout/the-sidebar';
import { TheContent } from '@/components/layout/the-content';
</script>

<template>
  <div class="board">
    <div class="board-wrapper">
      <TheSidebar />
      <TheContent />
    </div>
  </div>
</template>

<style scoped lang="scss">
.board {
  @apply min-h-screen py-16 flex items-center justify-center bg-slate-50;
  &-wrapper {
    @apply w-full max-w-5xl h-[32rem] grid grid-cols-[16rem_1fr] bg-white border border-slate-200 rounded-lg shadow-lg shadow-slate-500/10;
  }
}
</style>
