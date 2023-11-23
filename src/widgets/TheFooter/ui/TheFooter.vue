<script lang="ts" setup>
import { BaseContainer } from '@/shared/uilib';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="py-8">
    <BaseContainer>
      <p class="text-lg text-center text-gray-500">
        © Task Tracker, 2023 - {{ currentYear }}
      </p>
    </BaseContainer>
  </footer>
</template>
