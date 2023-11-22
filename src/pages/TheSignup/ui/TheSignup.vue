<script lang="ts" setup>
import { RoutesPathEnum } from '@/shared/typicode';
import {
  BaseBgGradient,
  BaseButtonLink,
  BaseMat,
  BaseLogotype,
} from '@/shared/uilib';

import FormSignup from '@/widgets/FormSignup';
</script>

<template>
  <div
    class="relative flex justify-center items-start min-h-screen pt-[20vh] pb-[5vh] overflow-y-hidden"
  >
    <BaseBgGradient class="absolute top-2/4 -translate-y-2/4 left-0 -z-10" />
    <div class="grid gap-6 max-w-lg w-full">
      <BaseLogotype />
      <FormSignup />
      <BaseMat>
        <BaseButtonLink :to="RoutesPathEnum.signin">
          Вход в аккаунт
        </BaseButtonLink>
      </BaseMat>
    </div>
  </div>
</template>
