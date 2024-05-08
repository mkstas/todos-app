<script setup lang="ts">
import { onMounted } from 'vue';
import { VContainer, VSheet } from '@/shared/ui';
import { useHashUrl } from '@/shared/utils';
import { useGroupStore } from '@/entities/group';
import { useTaskStore } from '@/entities/task';
import { TheSidebar } from '@/widgets/the-sidebar';
import { TheTasks } from '@/widgets/the-tasks';

const { hashUrl } = useHashUrl();
const groupStore = useGroupStore();
const taskStore = useTaskStore();

onMounted(() => {
  groupStore.getGroups();
  taskStore.getTasks(hashUrl.value);

  window.addEventListener('hashchange', () => taskStore.getTasks(hashUrl.value));
});
</script>

<template>
  <VContainer>
    <VSheet class="max-w-5xl">
      <main class="space-y-4">
        <h1 class="text-xl font-semibold">Список задач</h1>
        <div class="grid md:grid-cols-[14rem_1fr] gap-8 md:h-[32rem]">
          <TheSidebar />
          <TheTasks />
        </div>
      </main>
    </VSheet>
  </VContainer>
</template>
