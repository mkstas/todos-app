<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';
import {
  BaseContainer,
  BaseLogotype,
  BaseLink,
  BaseTitle,
} from '@/shared/uilib';

import { TheFormSignin } from '@/widgets/TheFormSignin';
</script>

<template>
  <BaseContainer>
    <RouterLink class="inline-block mb-8" :to="RoutesPathEnum.home">
      <BaseLogotype />
    </RouterLink>
    <BaseTitle>Вход</BaseTitle>
    <TheFormSignin class="mb-8" />
    <BaseLink :to="RoutesPathEnum.signup">
      Еще нет аккаунта? Регистрация
    </BaseLink>
  </BaseContainer>
</template>
