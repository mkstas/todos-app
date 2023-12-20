<script lang="ts" setup>
import { RoutesPathEnum } from '@/shared/typicode';
import { BaseContainer, BaseButtonLink } from '@/shared/uilib';
</script>

<template>
  <BaseContainer class="py-16 md:pt-32">
    <h1 class="grid gap-2 md:gap-4 mb-12 md:mb-16">
      <span class="text-3xl md:text-5xl font-bold">Ошибка 404</span>
      <span class="text-xl md:text-3xl">Страница не найдена</span>
    </h1>
    <BaseButtonLink class="text-lg" :to="RoutesPathEnum.home">
      Вернуться на главную
    </BaseButtonLink>
  </BaseContainer>
</template>
