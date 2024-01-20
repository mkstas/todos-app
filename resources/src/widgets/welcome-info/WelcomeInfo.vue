<script setup lang="ts">
import { RoutesPathEnum } from '@/shared/types';
import { VButtonLink } from '@/shared/ui-kit';
</script>

<template>
  <section class="flex flex-col items-center px-3 pt-40 pb-20">
    <div class="max-w-sm md:max-w-md mb-20 space-y-10">
      <h1 class="text-3xl md:text-4xl text-center font-semibold">
        Организуйте свои дела в работе и в жизни
      </h1>
      <p class="md:text-xl text-center">
        Task Tracker поможет вам организовать и упорядочить свои цели и задачи
      </p>
    </div>
    <VButtonLink class="mx-auto" :to="RoutesPathEnum.register">
      Начать сейчас
    </VButtonLink>
  </section>
</template>
