<script setup lang="ts">
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import { VButton } from '@/shared/ui';
</script>

<template>
  <VButton class="flex justify-between items-center gap-2 w-full">
    <span>Создать</span>
    <PlusCircleIcon class="w-5 h-5" />
  </VButton>
</template>
