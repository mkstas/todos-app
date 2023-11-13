<script lang="ts" setup>
import { Ref, ref } from 'vue';

import { useViewerStore } from '@/entities/viewer';

import BaseMat from '@/shared/BaseMat';
import BaseForm from '@/shared/BaseForm';
import BaseInput, { BaseInputEnum } from '@/shared/BaseInput';
import BaseButton from '@/shared/BaseButton';

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');

const { signin } = useViewerStore();

const onSubmitForm = () => {
  signin(email.value, password.value);
};
</script>

<template>
  <BaseMat>
    <BaseForm class="grid gap-6" @submit.prevent="onSubmitForm">
      <BaseInput
        v-model="email"
        label="Электронная почта"
        placeholder="user@gmail.com"
        id="email"
        :type="BaseInputEnum.email"
      />
      <BaseInput
        v-model="password"
        label="Пароль"
        placeholder="******"
        id="password"
        :type="BaseInputEnum.password"
      />
      <BaseButton>Войти</BaseButton>
    </BaseForm>
  </BaseMat>
</template>
