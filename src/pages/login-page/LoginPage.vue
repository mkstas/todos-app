<script setup lang="ts">
import { RoutesPath } from '@/shared/types';
import { VLink, VSheet } from '@/shared/ui-kit';
import { FormLogin } from '@/features';
import { AppFooter, AppHeader } from '@/widgets';
</script>

<template>
  <AppHeader />
  <main class="flex-1 flex flex-col justify-center pt-20 pb-10">
    <div class="mx-auto max-w-sm w-full">
      <h1 class="mb-8 text-3xl font-semibold px-6">Вход</h1>
      <VSheet class="p-6">
        <FormLogin />
        <VLink :to="RoutesPath.register" class="block mt-6">
          Еще нет аккаунта? Регистрация
        </VLink>
      </VSheet>
    </div>
  </main>
  <AppFooter />
</template>
