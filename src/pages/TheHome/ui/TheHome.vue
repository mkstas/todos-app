<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';
</script>

<template>
  <div>
    <RouterLink :to="RoutesPathEnum.signin">Вход</RouterLink>
    <RouterLink :to="RoutesPathEnum.signup">Регистрация</RouterLink>
  </div>
</template>
