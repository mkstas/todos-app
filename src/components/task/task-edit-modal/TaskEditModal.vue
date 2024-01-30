<script setup lang="ts">
import { Ref, inject, ref } from 'vue';
import { ITask } from '@/types';
import { VButton, VModal, VTextField } from '@/components/ui';

const props = defineProps<{
  task: ITask;
}>();

const text: Ref<string> = ref(props.task.text);

const emit = defineEmits(['close-modal']);

const updateTask = inject('update-task');

const onSubmitForm = () => {
  updateTask(props.task.id, { text: text.value });
  emit('close-modal');
};
</script>

<template>
  <VModal title="Редактирование задачи" @close-modal="emit('close-modal')">
    <form class="grid gap-4" @submit.prevent="onSubmitForm">
      <VTextField v-model="text" />
      <VButton>Сохранить</VButton>
    </form>
  </VModal>
</template>
