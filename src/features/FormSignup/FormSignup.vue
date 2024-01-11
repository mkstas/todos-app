<script lang="ts" setup>
import { Ref, ref } from 'vue';

import { Button, Input, InputTypeEnum, Form } from '@/shared/uilib';

import { useUserStore } from '@/entities/user';

const userName: Ref<string> = ref('');
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');

const { signUpWithRedirect } = useUserStore();

const onSubmitForm = async () => {
  await signUpWithRedirect(userName.value, email.value, password.value);
};
</script>

<template>
  <div class="max-w-sm">
    <Form class="grid gap-4" @submit.prevent="onSubmitForm">
      <Input
        v-model="userName"
        label="Имя пользователя"
        placeholder="user"
        id="user"
      />
      <Input
        v-model="email"
        label="Электронная почта"
        placeholder="user@gmail.com"
        id="email"
        :type="InputTypeEnum.email"
      />
      <Input
        v-model="password"
        label="Пароль"
        placeholder="******"
        id="password"
        :type="InputTypeEnum.password"
      />
      <Button>Зарегистрироваться</Button>
    </Form>
  </div>
</template>
