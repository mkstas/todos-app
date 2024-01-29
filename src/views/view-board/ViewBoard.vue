<script setup lang="ts">
import { TheSidebar } from '@/components/layout/the-sidebar';
import { TheContent } from '@/components/layout/the-content';
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
