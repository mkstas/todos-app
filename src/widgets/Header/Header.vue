<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';
import { Logotype } from '@/shared/uilib';

import { Navigation } from '@/widgets/Navigation';
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full p-3 bg-sky-50">
    <div class="flex justify-between items-center">
      <RouterLink :to="RoutesPathEnum.home">
        <Logotype />
      </RouterLink>
      <Navigation />
    </div>
  </header>
</template>
