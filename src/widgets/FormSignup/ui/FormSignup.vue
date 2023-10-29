<script lang="ts" setup>
import BaseMat from '@/shared/BaseMat';
import BaseForm from '@/shared/BaseForm';
import BaseInput from '@/shared/BaseInput';
import BaseButton from '@/shared/BaseButton';
</script>

<template>
  <BaseMat>
    <BaseForm class="grid gap-6">
      <BaseInput
        label="Электронная почта"
        type="email"
        placeholder="user@gmail.com"
        id="email"
      />
      <BaseInput
        label="Пароль"
        type="password"
        placeholder="********"
        id="password"
      />
      <BaseInput
        label="Повторите пароль"
        type="password"
        placeholder="********"
        id="password_repeat"
      />
      <BaseButton>Зарегистрироваться</BaseButton>
    </BaseForm>
  </BaseMat>
</template>
