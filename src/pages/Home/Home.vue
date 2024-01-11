<script lang="ts" setup>
import { Header } from '@/widgets/Header';
import { Intro } from '@/widgets/Intro';
import { Footer } from '@/widgets/Footer';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1 pt-16 bg-gradient-to-b from-sky-50 to-white">
      <Intro />
    </main>
    <Footer />
  </div>
</template>
