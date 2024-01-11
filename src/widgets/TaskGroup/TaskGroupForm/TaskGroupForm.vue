<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';

import { useTaskGroupStore } from '@/entities/taskGroup';

import { Button, Form, Input } from '@/shared/uilib';
import { RoutesNameEnum } from '@/shared/typicode';

const groupTitle: Ref<string> = ref('');

const emit = defineEmits(['close-modal']);

const router = useRouter();

const { createAndAddTaskGroup } = useTaskGroupStore();

const onSubmitForm = async () => {
  const response = await createAndAddTaskGroup(groupTitle.value);

  emit('close-modal');

  router.push({ name: RoutesNameEnum.tasks, params: { id: response?.id } });
};
</script>

<template>
  <Form @submit.prevent="onSubmitForm">
    <div class="grid gap-4">
      <Input
        v-model="groupTitle"
        label="Название группы"
        id="groupTitle"
        placeholder="Уборка"
      />
      <Button>Создать</Button>
    </div>
  </Form>
</template>
