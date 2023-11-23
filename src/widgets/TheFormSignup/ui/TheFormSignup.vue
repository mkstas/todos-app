<script lang="ts" setup>
import { Ref, ref } from 'vue';

import { BaseButton, BaseInput, BaseInputEnum, BaseForm } from '@/shared/uilib';

import { useUserStore } from '@/entities/user';

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const userName: Ref<string> = ref('');

const { signup } = useUserStore();

const onSubmitForm = async () => {
  await signup(email.value, password.value, userName.value);
};
</script>

<template>
  <div class="max-w-sm">
    <BaseForm class="grid gap-4" @submit.prevent="onSubmitForm">
      <BaseInput
        v-model="userName"
        label="Имя пользователя"
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
        label="Пароль"
        placeholder="******"
        id="password"
        :type="BaseInputEnum.password"
        :required="true"
      />
      <BaseButton>Зарегистрироваться</BaseButton>
    </BaseForm>
  </div>
</template>
