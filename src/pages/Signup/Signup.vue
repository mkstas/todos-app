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

import { FormSignup } from '@/features/FormSignup';
</script>

<template>
  <Container class="py-16 md:pt-32">
    <RouterLink class="inline-block mb-8" :to="RoutesPathEnum.home">
      <Logotype />
    </RouterLink>
    <Heading :type="HeadingEnum.h1" class="mb-6"> Регистрация </Heading>
    <FormSignup class="mb-8" />
    <Link :to="RoutesPathEnum.signin">Уже есть аккаунт? Войдите</Link>
  </Container>
</template>
