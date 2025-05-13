<script setup lang="ts">
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import { VButton } from '@/shared/ui';
</script>

<template>
  <VButton class="flex w-full items-center justify-between gap-2">
    <span>Создать</span>
    <PlusCircleIcon class="h-5 w-5" />
  </VButton>
</template>
