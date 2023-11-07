<script lang="ts" setup>
import { Ref, ref } from 'vue';

import BaseMat from '@/shared/BaseMat';
import BaseForm from '@/shared/BaseForm';
import BaseInput, { BaseInputEnum } from '@/shared/BaseInput';
import BaseButton from '@/shared/BaseButton';
import { useViewerStore } from '@/entities/viewer';

const { viewer, signup } = useViewerStore();

const passwordRepeat: Ref<string> = ref('');
const passwordError: Ref<string> = ref('');

const onSubmitForm = () => {
  if (passwordRepeat.value !== viewer.password) {
    passwordError.value = 'Пароли не совпадают';
  }

  signup();
};
</script>

<template>
  <BaseMat>
    <BaseForm class="grid gap-6" @submit.prevent="onSubmitForm">
      <BaseInput
        v-model="viewer.email"
        label="Электронная почта"
        placeholder="user@gmail.com"
        id="email"
        :type="BaseInputEnum.email"
      />
      <BaseInput
        v-model="viewer.password"
        placeholder="********"
        label="Пароль"
        id="password"
        :type="BaseInputEnum.password"
        :error="passwordError"
      />
      <BaseInput
        v-model="passwordRepeat"
        label="Повторите пароль"
        placeholder="********"
        id="password_repeat"
        :type="BaseInputEnum.password"
        :error="passwordError"
      />
      <BaseButton>Зарегистрироваться</BaseButton>
    </BaseForm>
  </BaseMat>
</template>
