<script lang="ts" setup>
import {
  BaseHeading,
  BaseHeadingEnum,
  BaseButton,
  BaseModal,
  BaseForm,
  BaseInput,
} from '@/shared/uilib';

import { useOpenModal } from '@/shared/utils';

import { TheTaskListPropsType } from './TheTaskList.types';
import { Ref, ref } from 'vue';

defineProps<TheTaskListPropsType>();

const task: Ref<string> = ref('');

const { isOpenModal, openModal, closeModal } = useOpenModal();
</script>

<template>
  <div>
    <BaseHeading :type="BaseHeadingEnum.h2">
      {{ title }}
    </BaseHeading>

    <BaseButton @click="openModal">Новая задача</BaseButton>

    <BaseModal v-if="isOpenModal" @close="closeModal">
      <BaseForm>
        <BaseInput v-model="task" />
      </BaseForm>
    </BaseModal>
  </div>
</template>
