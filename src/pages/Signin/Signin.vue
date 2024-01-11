<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';

import {
  Container,
  Logotype,
  Link,
  Heading,
  HeadingEnum,
} from '@/shared/uilib';

import { FormSignin } from '@/features/FormSignin';
</script>

<template>
  <Container class="py-16 md:pt-32">
    <RouterLink class="inline-block mb-8" :to="RoutesPathEnum.home">
      <Logotype />
    </RouterLink>
    <Heading :type="HeadingEnum.h1" class="mb-6">Вход</Heading>
    <FormSignin class="mb-8" />
    <Link :to="RoutesPathEnum.signup"> Еще нет аккаунта? Регистрация </Link>
  </Container>
</template>
