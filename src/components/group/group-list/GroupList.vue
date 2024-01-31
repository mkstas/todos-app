<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline';
import { VButtonIcon } from '@/components/ui';
import { useGroupStore } from '@/stores';

const groupStore = useGroupStore();
</script>

<template>
  <h2 class="text-lg font-medium">Группы задач</h2>
  <ul class="divide-y divide-zinc-200" v-if="groupStore.groups">
    <li class="flex items-center gap-2 py-1" v-for="group in groupStore.groups">
      <a
        class="flex-1 px-3 py-2 block font-medium rounded-lg outline-none hover:bg-slate-200 focus-visible:bg-slate-200"
        :href="`#${group.id}`"
        >{{ group.title }}</a
      >
      <VButtonIcon variant="red" @click="groupStore.deleteGroup(group.id)">
        <TrashIcon class="w-4 h-4" />
      </VButtonIcon>
    </li>
  </ul>
</template>
