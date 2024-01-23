<script setup lang="ts">
import { RoutesPath } from '@/shared/types';
import { VButtonLink, VContainer } from '@/shared/ui-kit';
</script>

<template>
  <section class="flex-1 flex flex-col justify-center pt-20 pb-10">
    <VContainer>
      <div class="flex flex-col items-center">
        <div class="max-w-sm md:max-w-xl mb-20 space-y-10">
          <h1 class="text-3xl md:text-5xl text-center font-semibold">
            Организуйте свои дела в работе и в жизни
          </h1>
          <p class="md:text-xl text-center">
            Task Tracker поможет вам организовать и упорядочить свои цели и
            задачи
          </p>
        </div>
        <VButtonLink :to="RoutesPath.register">Начать сейчас</VButtonLink>
      </div>
    </VContainer>
  </section>
</template>
