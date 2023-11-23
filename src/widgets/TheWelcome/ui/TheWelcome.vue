<script lang="ts" setup>
import { RoutesPathEnum } from '@/shared/typicode';
import { BaseButtonLink, BaseContainer } from '@/shared/uilib';
</script>

<template>
  <section class="py-24">
    <BaseContainer>
      <div class="max-w-xl md:max-w-3xl mx-auto text-balance grid items-center">
        <h1 class="mb-8 text-center text-3xl md:text-5xl lg:text-5xl font-bold">
          Организуйте свои дела в работе и в жизни
        </h1>
        <p class="mb-12 text-lg md:text-2xl text-center text-gray-500">
          Task Tracker поможет вам организовать и упорядочить свои цели и задачи
        </p>
        <BaseButtonLink class="mx-auto text-lg" :to="RoutesPathEnum.signup">
          Начать сейчас
        </BaseButtonLink>
      </div>
    </BaseContainer>
  </section>
</template>
