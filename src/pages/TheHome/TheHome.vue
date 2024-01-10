<script lang="ts" setup>
import { TheHeader } from '@/widgets/TheHeader';
import { TheIntro } from '@/widgets/TheIntro';
import { Footer } from '@/widgets/Footer';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-1 pt-16 bg-gradient-to-b from-sky-50 to-white">
      <TheIntro />
    </main>
    <Footer />
  </div>
</template>
