<script setup lang="ts">
import { inject } from 'vue';
import { IGroup } from '@/types';
import { useModal } from '@/composables';
import { CreateGroupButton, CreateGroupModal } from '@/components/group';
import { SidebarItem } from './sidebar-item';

const { isOpenModal, openModal, closeModal } = useModal();

const groups: IGroup[] | undefined = inject('groups');
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
      <CreateGroupButton @click="openModal" />
    </div>
    <CreateGroupModal v-if="isOpenModal" @close-modal="closeModal" />
  </aside>
</template>
