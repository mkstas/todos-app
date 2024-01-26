<script setup lang="ts">
import { Ref, computed, onMounted, ref } from 'vue';
import { VButton, VTextField } from '@/shared/ui';
import { useGroup, useTask } from '@/entities';
import { hash } from 'bcrypt-ts';

const task: Ref<string> = ref('');
const urlHash: Ref<string> = ref('');

const { groups } = useGroup();
const taskStore = useTask();

const title = computed(
  () => groups.find(group => group.id === urlHash.value)?.title,
);

const onSubmitForm = () => {
  taskStore.storeTask({
    id: Date.now().toString(),
    groupId: urlHash.value,
    text: task.value,
    isComplete: false,
  });
};

onMounted(() => {
  urlHash.value = window.location.hash.slice(1);
});

window.addEventListener('hashchange', () => {
  urlHash.value = window.location.hash.slice(1);
  console.log(urlHash.value);
});
</script>

<template>
  <div class="p-4 space-y-3 border-b border-zinc-300">
    <h1 class="text-xl">{{ title }}</h1>
    <form @submit.prevent="onSubmitForm" class="flex gap-4">
      <VTextField class="flex-1" placeholder="Новая задача" v-model="task" />
      <VButton>Добавить</VButton>
    </form>
  </div>
</template>
