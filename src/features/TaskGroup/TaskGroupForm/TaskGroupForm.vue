<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';

import { useTasksGroupStore } from '@/entities/tasksGroup';

import { BaseButton, BaseForm, BaseInput } from '@/shared/uilib';
import { RoutesNameEnum } from '@/shared/typicode';

const groupTitle: Ref<string> = ref('');

const emit = defineEmits(['close-modal']);

const router = useRouter();

const { createAndAddTaskGroup } = useTasksGroupStore();

const onSubmitForm = async () => {
  const response = await createAndAddTaskGroup(groupTitle.value);

  emit('close-modal');

  router.push({ name: RoutesNameEnum.tasks, params: { id: response?.id } });
};
</script>

<template>
  <BaseForm @submit.prevent="onSubmitForm">
    <div class="grid gap-4">
      <BaseInput
        v-model="groupTitle"
        label="Название группы"
        id="groupTitle"
        placeholder="Уборка"
      />
      <BaseButton>Создать</BaseButton>
    </div>
  </BaseForm>
</template>
