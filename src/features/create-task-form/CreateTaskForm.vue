<script setup lang="ts">
import { Ref, ref } from 'vue';
import { VButton, VTextField } from '@/shared/ui';
import { useHashUrl } from '@/shared/utils';
import { useTaskStore } from '@/entities/task';

const { hashUrl } = useHashUrl();
const taskStore = useTaskStore();

const text: Ref<string> = ref('');
const error: Ref<string> = ref('');

const onSubmit = () => {
  if (text.value.trim() === '') {
    return (error.value = 'Поле не может быть пустым');
  }

  taskStore.storeTask(hashUrl.value, text.value.trim());

  error.value = '';
  text.value = '';
};
</script>

<template>
  <form class="grid items-start gap-4 sm:flex sm:gap-2" @submit.prevent="onSubmit">
    <VTextField class="flex-1" v-model="text" :error="error" placeholder="Новая задача" />
    <VButton>Добавить</VButton>
  </form>
</template>
