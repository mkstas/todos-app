<script lang="ts" setup>
import { Heading, HeadingEnum } from '@/shared/uilib';
import { useOpenModal } from '@/shared/utils';

import { TaskGroupCreate } from './TaskGroupCreate';
import { TaskGroupModal } from './TaskGroupModal';

const { isOpenModal, openModal, closeModal } = useOpenModal();
</script>

<template>
  <div class="grid gap-4">
    <Heading :type="HeadingEnum.h3">Группы задач</Heading>
    <TaskGroupCreate @open-modal="openModal" />
    <TaskGroupModal v-if="isOpenModal" @close-modal="closeModal" />
  </div>
</template>
