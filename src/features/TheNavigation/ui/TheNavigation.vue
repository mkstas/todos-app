<script lang="ts" setup>
import { RoutesPathEnum } from '@/shared/typicode';
import { BaseButtonLink } from '@/shared/uilib';
</script>

<template>
  <nav>
    <ul class="flex justify-start items-center gap-4">
      <li>
        <BaseButtonLink :to="RoutesPathEnum.signin">Вход</BaseButtonLink>
      </li>
      <li>
        <BaseButtonLink :to="RoutesPathEnum.signup">
          Регистрация
        </BaseButtonLink>
      </li>
    </ul>
  </nav>
</template>
