<script setup lang="ts">
import { FormLogin } from '@/features';
import { AppFooter, AppHeader } from '@/widgets';
</script>

<template>
  <AppHeader />
  <main class="flex-1 flex flex-col">
    <section class="flex-1 flex flex-col justify-center pt-20 pb-10">
      <FormLogin />
    </section>
  </main>
  <AppFooter />
</template>
