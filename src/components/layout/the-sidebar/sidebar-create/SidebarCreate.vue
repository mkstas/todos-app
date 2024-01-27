<script setup lang="ts">
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import { VButton } from '@/components/buttons';
</script>

<template>
  <VButton class="button-create">
    <span>Создать</span>
    <PlusCircleIcon class="w-5 h-5" />
  </VButton>
</template>

<style scoped lang="scss">
.button-create {
  @apply w-full flex justify-between items-center;
}
</style>
