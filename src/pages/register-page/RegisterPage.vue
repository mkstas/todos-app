<script setup lang="ts">
import { RoutesPathEnum } from '@/shared/types';
import { VLink, VSheet } from '@/shared/ui-kit';
import { FormRegister } from '@/features';
import { AppFooter, AppHeader } from '@/widgets';
</script>

<template>
  <AppHeader />
  <main class="flex-1 flex flex-col justify-center pt-20 pb-10">
    <div class="mx-auto max-w-sm w-full">
      <h1 class="mb-8 text-3xl font-semibold px-6">Регистрация</h1>
      <VSheet class="p-6">
        <FormRegister />
        <VLink :to="RoutesPathEnum.login" class="block mt-6">
          Уже есть аккаунт? Вход
        </VLink>
      </VSheet>
    </div>
  </main>
  <AppFooter />
</template>
