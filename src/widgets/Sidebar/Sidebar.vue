<script lang="ts" setup>
import { Button, Logotype } from '@/shared/uilib';

import { useUserStore } from '@/entities/user';

import { UserInfo } from '@/widgets/UserInfo';
import { TaskGroup } from '@/widgets/TaskGroup';

const { signOutWithRedirect } = useUserStore();
</script>

<template>
  <section
    class="grid md:grid-rows-[auto_1fr_auto] gap-6 p-3 bg-gray-100 max-md:border-b md:border-r border-slate-200"
  >
    <Logotype />
    <div class="flex-1 flex flex-col gap-8">
      <UserInfo />
      <TaskGroup />
    </div>
    <Button @click="signOutWithRedirect">Выйти</Button>
  </section>
</template>
