<script setup lang="ts">
import { VButton, VTextField } from '@/shared/ui-kit';
import { useRegister } from './useRegister';

const { fields } = useRegister();
</script>

<template>
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
</template>
