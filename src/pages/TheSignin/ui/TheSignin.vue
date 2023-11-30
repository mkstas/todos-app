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

import { FormSignin } from '@/features/FormSignin';
</script>

<template>
  <BaseContainer class="grid gap-8 py-16 md:pt-32">
    <RouterLink class="inline-block" :to="RoutesPathEnum.home">
      <BaseLogotype />
    </RouterLink>
    <BaseHeading :type="BaseHeadingEnum.h1">Вход</BaseHeading>
    <FormSignin />
    <BaseLink :to="RoutesPathEnum.signup">
      Еще нет аккаунта? Регистрация
    </BaseLink>
  </BaseContainer>
</template>
