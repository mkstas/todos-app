<script lang="ts" setup>
import { BaseHeading, BaseHeadingEnum } from '@/shared/uilib';

import { TheSidebar } from '@/widgets/TheSidebar';
import { TheTaskList } from '@/widgets/TheTaskList';
</script>

<template>
  <main class="md:grid md:grid-cols-[15rem_1fr] h-screen">
    <TheSidebar />

    <section class="grid md:self-start gap-6 p-3 md:pl-8">
      <BaseHeading :type="BaseHeadingEnum.h1">Доска задач</BaseHeading>

      <TheTaskList />
    </section>
  </main>
</template>
