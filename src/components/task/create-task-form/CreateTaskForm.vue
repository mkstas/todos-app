<script setup lang="ts">
import { Ref, inject, ref } from 'vue';
import { VButton, VTextField } from '@/components/ui';

const taskText: Ref<string> = ref('');

const storeTask = inject('store-task');

const onSubmitForm = () => {
  storeTask(window.location.hash.slice(1), taskText.value);
  taskText.value = '';
};
</script>

<template>
  <form class="flex gap-2" @submit.prevent="onSubmitForm">
    <VTextField class="flex-1" v-model="taskText" placeholder="Задача" />
    <VButton>Создать</VButton>
  </form>
</template>
