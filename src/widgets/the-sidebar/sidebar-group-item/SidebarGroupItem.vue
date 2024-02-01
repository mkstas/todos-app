<script setup lang="ts">
import { GroupItem } from '@/entities/group';
import { DeleteGroupButton } from '@/features/delete-group-button';
import { IProps } from './SidebarGroupItem.types';

defineProps<IProps>();
</script>

<template>
  <li class="flex items-center gap-2">
    <GroupItem class="flex-1" :group="group" />
    <DeleteGroupButton :id="group.id" />
  </li>
</template>
