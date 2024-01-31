<script setup lang="ts">
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import { VButton } from '@/components/ui';
</script>

<template>
  <VButton class="w-full flex justify-between items-center">
    <span>Создать</span>
    <PlusCircleIcon class="w-5 h-5" />
  </VButton>
</template>
