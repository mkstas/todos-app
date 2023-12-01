<script lang="ts" setup>
import { BaseButton, BaseLogotype } from '@/shared/uilib';

import { useUserStore } from '@/entities/user';

import { UserInfo } from '@/features/UserInfo';
import { TaskGroup } from '@/features/TaskGroup';

const { signOutWithRedirect } = useUserStore();
</script>

<template>
  <section
    class="grid md:grid-rows-[auto_1fr_auto] gap-6 p-3 bg-gray-100 max-md:border-b md:border-r border-slate-200"
  >
    <BaseLogotype />
    <div class="flex-1 flex flex-col gap-8">
      <UserInfo />
      <TaskGroup />
    </div>
    <BaseButton @click="signOutWithRedirect">Выйти</BaseButton>
  </section>
</template>
