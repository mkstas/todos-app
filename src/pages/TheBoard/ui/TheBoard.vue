<script lang="ts" setup>
import { BaseHeading, BaseHeadingEnum } from '@/shared/uilib';

import { TheSidebar } from '@/widgets/TheSidebar';
</script>

<template>
  <main class="md:grid md:grid-cols-[15rem_1fr] h-screen">
    <TheSidebar />

    <div class="grid gap-6 p-3 md:pl-8">
      <BaseHeading :type="BaseHeadingEnum.h1">Доска задач</BaseHeading>
    </div>
  </main>
</template>
