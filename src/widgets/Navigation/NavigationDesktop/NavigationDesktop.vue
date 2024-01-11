<script lang="ts" setup>
import { RoutesPathEnum } from '@/shared/typicode';
import { ButtonLink } from '@/shared/uilib';
</script>

<template>
  <nav>
    <ul class="flex justify-start items-center gap-4">
      <li>
        <ButtonLink :to="RoutesPathEnum.signin">Вход</ButtonLink>
      </li>
      <li>
        <ButtonLink :to="RoutesPathEnum.signup">Регистрация</ButtonLink>
      </li>
    </ul>
  </nav>
</template>
