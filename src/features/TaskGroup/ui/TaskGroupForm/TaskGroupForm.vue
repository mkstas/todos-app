<script lang="ts" setup>
import { Ref, ref } from 'vue';

import { useTasksGroupStore } from '@/entities/tasksGroup';

import { BaseButton, BaseForm, BaseInput } from '@/shared/uilib';

const groupTitle: Ref<string> = ref('');

const emit = defineEmits(['close-modal']);

const { createTaskGroup } = useTasksGroupStore();

const onSubmitForm = async () => {
  await createTaskGroup(groupTitle.value);
  emit('close-modal');
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
