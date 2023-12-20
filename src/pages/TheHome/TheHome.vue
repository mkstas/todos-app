<script lang="ts" setup>
import { TheHeader } from '@/widgets/TheHeader';
import { TheWelcome } from '@/widgets/TheWelcome';
import { TheFooter } from '@/widgets/TheFooter';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-1 pt-16 bg-gradient-to-b from-sky-50 to-white">
      <TheWelcome />
    </main>
    <TheFooter />
  </div>
</template>
