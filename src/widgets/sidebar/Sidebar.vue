<script setup lang="ts">
import { GroupList } from '@/entities';
import { GroupCreateButton } from '@/features';
</script>

<template>
  <aside class="p-2 bg-zinc-700 max-w overflow-y-auto">
    <h2 class="p-2 text-white text-lg">Группы задач</h2>
    <GroupList />
    <GroupCreateButton />
  </aside>
</template>
