<script lang="ts" setup>
import { Ref, ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { Heading, HeadingEnum } from '@/shared/uilib';

import { useTaskGroupStore } from '@/entities/taskGroup';

import { Sidebar } from '@/widgets/Sidebar';
import { TaskList } from '@/widgets/TaskList';

const taskGroupTitle: Ref<string> = ref('');

const route = useRoute();
const { getAndSetTaskGroup } = useTaskGroupStore();

const getTaskGroupTitle = async () => {
  taskGroupTitle.value = await getAndSetTaskGroup(route.params.id as string);
};

onMounted(async () => await getTaskGroupTitle());

watch(
  () => route.params.id,
  async () => await getTaskGroupTitle(),
);
</script>

<template>
  <main class="md:grid md:grid-cols-[20rem_1fr] h-screen">
    <Sidebar />
    <section class="p-3 md:pl-8">
      <div class="grid gap-3 max-w-2xl mx-auto">
        <Heading :type="HeadingEnum.h1">Доска задач</Heading>
        <div class="grid gap-5">
          <Heading :type="HeadingEnum.h2">
            {{ taskGroupTitle }}
          </Heading>
          <TaskList />
        </div>
      </div>
    </section>
  </main>
</template>
