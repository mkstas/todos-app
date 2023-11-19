<script lang="ts" setup>
import { Ref, ref } from 'vue';

import {
  BaseButton,
  BaseInput,
  BaseInputEnum,
  BaseForm,
  BaseMat,
  BaseError,
} from '@/shared/uilib';

import { useUserStore } from '@/entities/user';

const userName: Ref<string> = ref('');
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const passwordRepeat: Ref<string> = ref('');
const passwordError: Ref<string> = ref('');

const { signup } = useUserStore();

const onSubmitForm = async () => {
  if (passwordRepeat.value !== password.value) {
    return (passwordError.value = 'Пароли не совпадают');
  }

  await signup(email.value, password.value, userName.value);
};
</script>

<template>
  <BaseMat>
    <BaseForm class="grid gap-6" @submit.prevent="onSubmitForm">
      <BaseInput
        v-model="userName"
        label="Никнейм"
        placeholder="user"
        id="user"
        :required="true"
      />
      <BaseInput
        v-model="email"
        label="Электронная почта"
        placeholder="user@gmail.com"
        id="email"
        :type="BaseInputEnum.email"
        :required="true"
      />
      <BaseInput
        v-model="password"
        placeholder="******"
        label="Пароль"
        id="password"
        :type="BaseInputEnum.password"
        :required="true"
      />
      <BaseInput
        v-model="passwordRepeat"
        label="Повторите пароль"
        placeholder="******"
        id="password_repeat"
        :type="BaseInputEnum.password"
        :required="true"
      />
      <BaseError :error="passwordError" />
      <BaseButton>Зарегистрироваться</BaseButton>
    </BaseForm>
  </BaseMat>
</template>
