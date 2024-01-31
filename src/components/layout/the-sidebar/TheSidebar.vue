<script setup lang="ts">
import { GroupCreateButton, GroupCreateModal } from '@/components/group';
import { useModal } from '@/composables';
import { useGroupStore } from '@/stores';
import { SidebarItem } from './sidebar-item';

const { isOpenModal, openModal, closeModal } = useModal();
const { groups } = useGroupStore();
</script>

<template>
  <aside class="p-4">
    <div class="space-y-4">
      <h2 class="text-lg font-medium">Группы задач</h2>
      <ul v-if="groups">
        <SidebarItem
          v-for="group in groups"
          :key="group.id"
          :id="group.id"
          :title="group.title"
        />
      </ul>
      <GroupCreateButton @click="openModal" />
    </div>
    <GroupCreateModal v-if="isOpenModal" @close-modal="closeModal" />
  </aside>
</template>
