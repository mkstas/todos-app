<script setup lang="ts">
import {
  GroupCreateButton,
  GroupCreateModal,
  GroupList,
} from '@/components/group';
import { useModal } from '@/composables';

const { isOpenModal, openModal, closeModal } = useModal();
</script>

<template>
  <aside class="p-4">
    <div class="space-y-4">
      <GroupList />
      <GroupCreateButton @click="openModal" />
    </div>
    <GroupCreateModal v-if="isOpenModal" @close-modal="closeModal" />
  </aside>
</template>
