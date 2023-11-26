<script lang="ts" setup>
import { Ref, ref } from 'vue';

import {
  BaseButton,
  BaseInput,
  BaseInputTypeEnum,
  BaseForm,
} from '@/shared/uilib';

import { useUserStore } from '@/entities/user';

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');

const { signInWithRedirect } = useUserStore();

const onSubmitForm = async () => {
  await signInWithRedirect(email.value, password.value);
};
</script>

<template>
  <div class="max-w-sm">
    <BaseForm class="grid gap-4" @submit.prevent="onSubmitForm">
      <BaseInput
        v-model="email"
        label="Электронная почта"
        placeholder="user@gmail.com"
        id="email"
        :type="BaseInputTypeEnum.email"
      />
      <BaseInput
        v-model="password"
        label="Пароль"
        placeholder="******"
        id="password"
        :type="BaseInputTypeEnum.password"
      />
      <BaseButton>Войти</BaseButton>
    </BaseForm>
  </div>
</template>
