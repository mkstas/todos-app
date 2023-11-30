<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';
import {
  BaseContainer,
  BaseLogotype,
  BaseLink,
  BaseHeading,
  BaseHeadingEnum,
} from '@/shared/uilib';

import { FormSignup } from '@/features/FormSignup';
</script>

<template>
  <BaseContainer class="grid gap-8 py-16 md:pt-32">
    <RouterLink class="inline-block" :to="RoutesPathEnum.home">
      <BaseLogotype />
    </RouterLink>
    <BaseHeading :type="BaseHeadingEnum.h1">Регистрация</BaseHeading>
    <FormSignup />
    <BaseLink :to="RoutesPathEnum.signin"> Уже есть аккаунт? Войдите </BaseLink>
  </BaseContainer>
</template>
