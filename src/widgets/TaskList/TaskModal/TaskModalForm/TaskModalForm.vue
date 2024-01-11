<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { useRoute } from 'vue-router';

import { TaskStatusEnum, TaskType } from '@/shared/typicode';

import { Button, Form, Input, Textarea } from '@/shared/uilib';

import { useTaskStore } from '@/entities/task';

const taskTitle: Ref<string> = ref('');
const taskDescription: Ref<string> = ref('');

const emit = defineEmits(['close-modal']);

const route = useRoute();

const { createAndGetTask } = useTaskStore();

const onSubmitForm = async () => {
  await createAndGetTask({
    taskGroupId: route.params.id,
    title: taskTitle.value,
    description: taskDescription.value,
    status: TaskStatusEnum.proccess,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  } as TaskType);

  emit('close-modal');
};
</script>

<template>
  <Form class="grid gap-4" @submit.prevent="onSubmitForm">
    <Input
      v-model="taskTitle"
      id="title"
      label="Название*"
      placeholder="Помыть посуду"
    />
    <Textarea
      v-model="taskDescription"
      id="description"
      label="Описание"
      placeholder="Подробности"
      :required="false"
    />
    <Button>Создать</Button>
  </Form>
</template>
