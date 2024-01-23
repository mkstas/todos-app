<script setup lang="ts">
import { RoutesPathEnum } from '@/shared/types';
import { VButtonLink } from '@/shared/ui-kit';
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 w-full h-full pt-32 pb-12 bg-white overflow-y-auto"
  >
    <ul class="flex flex-col items-center justify-center gap-10">
      <li>
        <VButtonLink :to="RoutesPathEnum.login" size="sm">Вход</VButtonLink>
      </li>
      <li>
        <VButtonLink :to="RoutesPathEnum.register" size="sm">
          Регистрация
        </VButtonLink>
      </li>
    </ul>
  </div>
</template>
