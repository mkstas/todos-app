<script lang="ts" setup>
import { RoutesPathEnum } from '@/shared/typicode';
import {
  BaseLogotype,
  BaseBgGradient,
  BaseButtonLink,
  BaseMat,
} from '@/shared/uilib';

import FormSignin from '@/widgets/FormSignin';
</script>

<template>
  <div
    class="relative flex justify-center items-start min-h-screen pt-[20vh] pb-[5vh] overflow-y-hidden"
  >
    <BaseBgGradient class="absolute top-2/4 -translate-y-2/4 left-0 -z-10" />
    <div class="grid gap-6 max-w-lg w-full">
      <BaseLogotype />
      <FormSignin />
      <BaseMat>
        <BaseButtonLink :to="RoutesPathEnum.signup">
          Регистрация аккаунта
        </BaseButtonLink>
      </BaseMat>
    </div>
  </div>
</template>
