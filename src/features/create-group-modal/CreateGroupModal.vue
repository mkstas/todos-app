<script setup lang="ts">
import { Ref, ref } from 'vue';
import { VButton, VModal, VTextField } from '@/shared/ui';
import { useGroupStore } from '@/entities/group';

const title: Ref<string> = ref('');

const emit = defineEmits(['close-modal']);

const groupStore = useGroupStore();

const onSubmitForm = () => {
  groupStore.storeGroup(title.value);
  title.value = '';
  location.hash = groupStore.groups[groupStore.groups.length - 1].id;

  emit('close-modal');
};
</script>

<template>
  <VModal title="Создание группы" @close-modal="emit('close-modal')">
    <form class="space-y-4" @submit.prevent="onSubmitForm">
      <VTextField v-model="title" placeholder="Новая группа" />
      <VButton>Создать</VButton>
    </form>
  </VModal>
</template>
