<script lang="ts" setup>
defineProps<{
  error: string;
}>();
</script>

<template>
  <span class="text-lg text-red-600 text-center">{{ error }}</span>
</template>
