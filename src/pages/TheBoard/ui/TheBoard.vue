<script lang="ts" setup>
import { useUserStore } from '@/entities/user';

const { signout } = useUserStore();
</script>

<template>
  <div>
    <h1>Board</h1>
    <button @click="signout">Выйти</button>
  </div>
</template>
