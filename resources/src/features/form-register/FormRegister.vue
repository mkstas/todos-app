<script setup lang="ts">
import { VButton, VTextField } from '@/shared/ui-kit';
import { useRegister } from './useRegister';

const { fields } = useRegister();
</script>

<template>
  <div class="mx-auto max-w-sm w-full">
    <h1 class="mb-8 text-3xl font-semibold px-6">Регистрация</h1>
    <div class="shadow-md shadow-gray-800/15 rounded p-6">
      <form @submit.prevent class="grid gap-6">
        <VTextField
          v-for="field in fields"
          :key="field.id"
          :type="field.type"
          :id="field.id"
          :label="field.label"
          :placeholder="field.placeholder"
        />
        <VButton>Зарегистрироваться</VButton>
      </form>
    </div>
  </div>
</template>
