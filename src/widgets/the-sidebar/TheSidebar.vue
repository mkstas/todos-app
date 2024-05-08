<script setup lang="ts">
import { useModal } from '@/shared/utils';
import { useGroupStore } from '@/entities/group';
import { CreateGroupButton } from '@/features/create-group-button';
import { CreateGroupModal } from '@/features/create-group-modal';
import { SidebarGroupItem } from './sidebar-group-item';

const groupStore = useGroupStore();
const { isOpenModal, openModal, closeModal } = useModal();
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-lg font-semibold">Группы задач</h2>
    <ul>
      <SidebarGroupItem v-for="group in groupStore.groups" :key="group.id" :group="group" />
    </ul>
    <div>
      <CreateGroupButton @click="openModal" />
      <CreateGroupModal v-if="isOpenModal" @close-modal="closeModal" />
    </div>
  </section>
</template>
