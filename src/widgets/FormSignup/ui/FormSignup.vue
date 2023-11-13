<script lang="ts" setup>
import { Ref, ref } from 'vue';

import { useViewerStore } from '@/entities/viewer';

import BaseMat from '@/shared/BaseMat';
import BaseForm from '@/shared/BaseForm';
import BaseInput, { BaseInputEnum } from '@/shared/BaseInput';
import BaseButton from '@/shared/BaseButton';

const { signup } = useViewerStore();

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const passwordRepeat: Ref<string> = ref('');
const passwordError: Ref<string> = ref('');

const onSubmitForm = () => {
  if (passwordRepeat.value !== password.value) {
    return (passwordError.value = 'Пароли не совпадают');
  }

  signup(email.value, password.value);
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
        placeholder="******"
        label="Пароль"
        id="password"
        :type="BaseInputEnum.password"
        :error="passwordError"
      />
      <BaseInput
        v-model="passwordRepeat"
        label="Повторите пароль"
        placeholder="******"
        id="password_repeat"
        :type="BaseInputEnum.password"
        :error="passwordError"
      />
      <BaseButton>Зарегистрироваться</BaseButton>
    </BaseForm>
  </BaseMat>
</template>
