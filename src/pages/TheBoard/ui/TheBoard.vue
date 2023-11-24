<script lang="ts" setup>
import { useUserStore } from '@/entities/user';

const { signOutWithRedirect } = useUserStore();
</script>

<template>
  <div>
    <h1>Board</h1>
    <button @click="signOutWithRedirect">Выйти</button>
  </div>
</template>
