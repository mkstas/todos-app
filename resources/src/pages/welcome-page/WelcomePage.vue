<script setup lang="ts">
import { AppFooter, AppHeader, WelcomeInfo } from '@/widgets';
</script>

<template>
  <div class="max-w-5xl min-h-screen mx-auto flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <WelcomeInfo />
    </main>
    <AppFooter />
  </div>
</template>
