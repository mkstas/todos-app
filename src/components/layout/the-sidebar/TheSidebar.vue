<script setup lang="ts">
import { SidebarItem } from './sidebar-item';
import { SidebarCreate } from './sidebar-create';
</script>

<template>
  <aside class="sidebar">
    <h2 class="sidebar-title">Группы задач</h2>
    <ul>
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
    </ul>
    <SidebarCreate />
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  @apply p-4 space-y-4;
  &-title {
    @apply text-lg font-semibold;
  }
}
</style>
