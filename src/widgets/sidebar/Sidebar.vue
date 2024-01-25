<script setup lang="ts">
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <aside class="p-2 bg-zinc-700 max-w overflow-y-auto">
    <p class="p-2 text-white text-lg">Группы задач</p>
    <ul>
      <li class="text-white">
        <button class="w-full text-start hover:bg-zinc-800 py-2 px-3 rounded">
          Заголовок группы
        </button>
      </li>
    </ul>
    <button
      class="flex justify-between items-center text-white w-full py-2 px-3 hover:bg-zinc-800 rounded"
    >
      <span>Добавить</span>
      <PlusCircleIcon class="w-5 h-5" />
    </button>
  </aside>
</template>
