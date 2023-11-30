<script lang="ts" setup>
import { BaseHeading, BaseHeadingEnum } from '@/shared/uilib';
import { useOpenModal } from '@/shared/utils';

import { TaskGroupCreate } from './TaskGroupCreate';
import { TaskGroupModal } from './TaskGroupModal';

const { isOpenModal, openModal, closeModal } = useOpenModal();
</script>

<template>
  <div class="grid gap-4">
    <BaseHeading :type="BaseHeadingEnum.h3">Группы задач</BaseHeading>
    <TaskGroupCreate @open-modal="openModal" />
    <TaskGroupModal v-if="isOpenModal" @close-modal="closeModal" />
  </div>
</template>
