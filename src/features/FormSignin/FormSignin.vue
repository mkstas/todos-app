<script lang="ts" setup>
import { Ref, ref } from 'vue';

import { Button, Input, InputTypeEnum, Form } from '@/shared/uilib';

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
    <Form class="grid gap-4" @submit.prevent="onSubmitForm">
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
      <Button>Войти</Button>
    </Form>
  </div>
</template>
