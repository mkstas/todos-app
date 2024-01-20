<script setup lang="ts">
import { ClipboardDocumentCheckIcon } from '@heroicons/vue/24/solid';

import { RoutesPathEnum } from '@/shared/types';
import { VButtonLink } from '@/shared/ui-kit';
</script>

<template>
  <header class="p-3">
    <nav class="flex justify-between">
      <RouterLink
        class="flex items-center gap-3 drop-shadow-md shadow-gray-800/15"
        :to="RoutesPathEnum.welcome"
      >
        <ClipboardDocumentCheckIcon class="w-10 h-10 text-blue-500" />
        <span class="text-2xl font-semibold text-gray-800">TaskTracker</span>
      </RouterLink>
      <ul class="flex gap-3">
        <li>
          <VButtonLink :to="RoutesPathEnum.login" size="sm">Вход</VButtonLink>
        </li>
        <li>
          <VButtonLink :to="RoutesPathEnum.register" size="sm">
            Регистрация
          </VButtonLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
