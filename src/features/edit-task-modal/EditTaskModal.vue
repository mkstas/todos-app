<script setup lang="ts">
import { Ref, ref } from 'vue';
import { VButton, VModal, VTextField } from '@/shared/ui';
import { useTaskStore } from '@/entities/task';
import { IProps } from './EditTaskModal.types';

const props = defineProps<IProps>();

const text: Ref<string> = ref(props.task.text);
const error: Ref<string> = ref('');

const emit = defineEmits(['close-modal']);

const taskStore = useTaskStore();

const onSubmit = () => {
  if (text.value.trim() === '') {
    return (error.value = 'Поле не может быть пустым');
  }

  taskStore.updateTask(props.task.id, { text: text.value });

  error.value = '';

  emit('close-modal');
};
</script>

<template>
  <VModal title="Редактирование задачи" @close-modal="emit('close-modal')">
    <form class="space-y-4" @submit.prevent="onSubmit">
      <VTextField v-model="text" :error="error" placeholder="Редактирование задачи" />
      <VButton class="ml-auto block">Сохранить</VButton>
    </form>
  </VModal>
</template>
