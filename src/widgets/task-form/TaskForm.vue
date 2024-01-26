<script setup lang="ts">
import { Ref, computed, onMounted, ref } from 'vue';
import { VButton, VTextField } from '@/shared/ui';
import { useGroup } from '@/entities';

const task: Ref<string> = ref('');
const hash: Ref<string> = ref('');

const { groups } = useGroup();

const title = computed(
  () => groups.find(group => group.id === hash.value)?.title,
);

onMounted(() => {
  hash.value = window.location.hash.slice(1);
});

window.addEventListener('hashchange', () => {
  hash.value = window.location.hash.slice(1);
});
</script>

<template>
  <div class="p-4 space-y-3 border-b border-zinc-300">
    <h1 class="text-xl">{{ title }}</h1>
    <form @submit.prevent="" class="flex gap-4">
      <VTextField class="flex-1" placeholder="Новая задача" v-model="task" />
      <VButton>Добавить</VButton>
    </form>
  </div>
</template>
