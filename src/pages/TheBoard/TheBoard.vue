<script lang="ts" setup>
import { Ref, ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { BaseHeading, BaseHeadingEnum } from '@/shared/uilib';

import { useTaskGroupsStore } from '@/entities/taskGroups';

import { TheSidebar } from '@/widgets/TheSidebar';
import { TaskList } from '@/widgets/TaskList';

const taskGroupTitle: Ref<string> = ref('');

const route = useRoute();
const { getAndSetTaskGroup } = useTaskGroupsStore();

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
    <TheSidebar />
    <section class="p-3 md:pl-8">
      <div class="grid gap-3 max-w-2xl mx-auto">
        <BaseHeading :type="BaseHeadingEnum.h1">Доска задач</BaseHeading>
        <div class="grid gap-5">
          <BaseHeading :type="BaseHeadingEnum.h2">
            {{ taskGroupTitle }}
          </BaseHeading>
          <TaskList />
        </div>
      </div>
    </section>
  </main>
</template>
