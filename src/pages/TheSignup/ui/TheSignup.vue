<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';
import { BaseContainer, BaseLogotype, BaseLink } from '@/shared/uilib';

import { TheFormSignup } from '@/widgets/TheFormSignup';
</script>

<template>
  <section class="py-32 bg-gradient-to-b from-sky-50 to-white">
    <BaseContainer>
      <RouterLink class="inline-block mb-8" :to="RoutesPathEnum.home">
        <BaseLogotype />
      </RouterLink>
      <h1 class="mb-4 text-2xl font-bold">Регистрация</h1>
      <TheFormSignup class="mb-8" />
      <BaseLink :to="RoutesPathEnum.signin">
        Уже есть аккаунт? Войдите
      </BaseLink>
    </BaseContainer>
  </section>
</template>
