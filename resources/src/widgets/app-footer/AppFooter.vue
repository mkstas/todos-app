<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="py-8">
    <p class="text-lg text-center text-gray-500">
      © Task Tracker, 2024 - {{ currentYear }}
    </p>
  </footer>
</template>
