<script lang="ts" setup>
import { Container } from '@/shared/uilib';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="py-8">
    <Container>
      <p class="text-lg text-center text-gray-500">
        © Task Tracker, 2023 - {{ currentYear }}
      </p>
    </Container>
  </footer>
</template>
