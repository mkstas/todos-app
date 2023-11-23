<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';
import {
  BaseContainer,
  BaseLogotype,
  BaseLink,
  BaseTitle,
} from '@/shared/uilib';

import { TheFormSignup } from '@/widgets/TheFormSignup';
</script>

<template>
  <BaseContainer>
    <RouterLink class="inline-block mb-8" :to="RoutesPathEnum.home">
      <BaseLogotype />
    </RouterLink>
    <BaseTitle>Регистрация</BaseTitle>
    <TheFormSignup class="mb-8" />
    <BaseLink :to="RoutesPathEnum.signin"> Уже есть аккаунт? Войдите </BaseLink>
  </BaseContainer>
</template>
