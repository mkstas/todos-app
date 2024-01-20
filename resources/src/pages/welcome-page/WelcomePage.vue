<script setup lang="ts">
import { AppFooter, Header, WelcomeInfo } from '@/widgets';
</script>

<template>
  <div class="max-w-5xl min-h-screen mx-auto flex flex-col">
    <Header />
    <main class="flex-1">
      <WelcomeInfo />
    </main>
    <AppFooter />
  </div>
</template>
