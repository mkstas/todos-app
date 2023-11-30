<script lang="ts" setup>
import { BaseButton, BaseLogotype } from '@/shared/uilib';

import { useUserStore } from '@/entities/user';

import { TaskGroup } from '@/features/TaskGroup';

const { user, signOutWithRedirect } = useUserStore();
</script>

<template>
  <div
    class="grid md:grid-rows-[auto_1fr_auto] gap-6 p-3 bg-gray-100 max-md:border-b md:border-r border-slate-200"
  >
    <BaseLogotype />
    <div class="flex-1 flex flex-col gap-8">
      <div>
        <p class="text-xl font-semibold">{{ user.userName }}</p>
        <p class="text-base text-gray-500">{{ user.email }}</p>
      </div>
      <TaskGroup />
    </div>
    <BaseButton @click="signOutWithRedirect">Выйти</BaseButton>
  </div>
</template>
@/features/TaskGroup
