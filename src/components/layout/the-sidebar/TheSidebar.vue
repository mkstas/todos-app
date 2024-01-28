<script setup lang="ts">
import { CreateGroupButton, CreateGroupModal } from '@/components/group';
import { useModal } from '@/composables';
import { SidebarItem } from './sidebar-item';

const { isOpenModal, openModal, closeModal } = useModal();
</script>

<template>
  <aside class="p-4">
    <div class="space-y-4">
      <h2 class="text-lg font-semibold">Группы задач</h2>
      <ul>
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </ul>
      <CreateGroupButton @click="openModal" />
    </div>
    <CreateGroupModal v-if="isOpenModal" @close-modal="closeModal" />
  </aside>
</template>
