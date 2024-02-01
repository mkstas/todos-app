<script setup lang="ts">
import { Ref, ref } from 'vue';
import { VButton, VModal, VTextField } from '@/shared/ui';
import { useTaskStore } from '@/entities/task';
import { IProps } from './EditTaskModal.types';

const props = defineProps<IProps>();

const text: Ref<string> = ref(props.task.text);

const emit = defineEmits(['close-modal']);

const taskStore = useTaskStore();

const onSubmit = () => {
  taskStore.updateTask(props.task.id, { text: text.value });
  emit('close-modal');
};
</script>

<template>
  <VModal title="Создание группы" @close-modal="emit('close-modal')">
    <form class="space-y-4" @submit.prevent="onSubmit">
      <VTextField v-model="text" placeholder="Редактирование задачи" />
      <VButton>Сохранить</VButton>
    </form>
  </VModal>
</template>
