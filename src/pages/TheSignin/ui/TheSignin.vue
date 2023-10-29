<script lang="ts" setup>
import BgGradient from '@/shared/BgGradient';
import Logotype from '@/shared/Logotype';
import BaseMat from '@/shared/BaseMat';
import BaseButtonLink from '@/shared/BaseButtonLink';
import FormSignin from '@/widgets/FormSignin';
</script>

<template>
  <div
    class="relative flex justify-center items-start min-h-screen pt-[20vh] pb-[5vh] overflow-y-hidden"
  >
    <BgGradient class="absolute top-2/4 -translate-y-2/4 left-0 -z-10" />
    <div class="grid gap-6 max-w-lg w-full">
      <Logotype />
      <FormSignin />
      <BaseMat>
        <BaseButtonLink to="/signup">Регистрация аккаунта</BaseButtonLink>
      </BaseMat>
    </div>
  </div>
</template>
