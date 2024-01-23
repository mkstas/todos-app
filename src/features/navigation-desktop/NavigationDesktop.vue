<script setup lang="ts">
import { RoutesPath } from '@/shared/types';
import { VButtonLink } from '@/shared/ui-kit';
</script>

<template>
  <ul class="flex gap-3 max-md">
    <li>
      <VButtonLink :to="RoutesPath.login" size="sm">Вход</VButtonLink>
    </li>
    <li>
      <VButtonLink :to="RoutesPath.register" size="sm">
        Регистрация
      </VButtonLink>
    </li>
  </ul>
</template>
