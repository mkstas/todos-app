<script lang="ts" setup>
import { ButtonAdd, Heading, HeadingEnum } from '@/shared/uilib';
import { useOpenModal } from '@/shared/utils';

import { TaskGroupList } from './TaskGroupList';
import { TaskGroupModal } from './TaskGroupModal';

const { isOpenModal, openModal, closeModal } = useOpenModal();
</script>

<template>
  <div class="grid gap-4">
    <Heading :type="HeadingEnum.h3">Группы задач</Heading>
    <TaskGroupList />
    <ButtonAdd @click="openModal" label="Создать группу задач" />
    <TaskGroupModal v-if="isOpenModal" @close-modal="closeModal" />
  </div>
</template>
