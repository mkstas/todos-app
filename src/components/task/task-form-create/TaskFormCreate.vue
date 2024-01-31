<script setup lang="ts">
import { Ref, ref } from 'vue';
import { VButton, VTextField } from '@/components/ui';
import { useTaskStore } from '@/stores';
import { useHashUrl } from '@/composables';

const value: Ref<string> = ref('');

const { hashUrl } = useHashUrl();
const { storeTask } = useTaskStore();

const onSubmitForm = () => {
  storeTask(hashUrl.value, value.value);
  value.value = '';
};
</script>

<template>
  <form class="flex gap-2" @submit.prevent="onSubmitForm">
    <VTextField class="flex-1" v-model="value" placeholder="Задача" />
    <VButton>Создать</VButton>
  </form>
</template>
