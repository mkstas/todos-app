<script setup lang="ts">
import { RoutesPathEnum } from '@/shared/types';
import { VButtonLink } from '@/shared/ui-kit';
</script>

<template>
  <ul class="flex gap-3 max-md">
    <li>
      <VButtonLink :to="RoutesPathEnum.login" size="sm">Вход</VButtonLink>
    </li>
    <li>
      <VButtonLink :to="RoutesPathEnum.register" size="sm">
        Регистрация
      </VButtonLink>
    </li>
  </ul>
</template>
