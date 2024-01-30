<script setup lang="ts">
import { Ref, inject, ref } from 'vue';
import { VButton, VModal, VTextField } from '@/components/ui';

const groupTitle: Ref<string> = ref('');

const emit = defineEmits(['close-modal']);

const groups = inject('groups');
const storeGroup = inject('store-group');

const onSubmitForm = () => {
  storeGroup(groupTitle.value);
  groupTitle.value = '';
  window.location.hash = groups.value[groups.value.length - 1].id;
  emit('close-modal');
};
</script>

<template>
  <VModal title="Создание группы" @close-modal="emit('close-modal')">
    <form class="grid gap-4" @submit.prevent="onSubmitForm">
      <VTextField v-model="groupTitle" placeholder="Название" />
      <VButton>Создать</VButton>
    </form>
  </VModal>
</template>
