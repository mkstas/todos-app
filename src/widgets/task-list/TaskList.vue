<script setup lang="ts">
import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="px-4 divide-y divide-zinc-300">
    <div class="flex justify-between items-start gap-2 py-4">
      <div class="flex-1">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          eveniet!
        </p>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-600 p-2 rounded shadow shadow-zinc-300/50"
      >
        <PencilSquareIcon class="w-6 h-6 text-white" />
      </button>
      <button
        class="bg-red-500 hover:bg-red-600 p-2 rounded shadow shadow-zinc-300/50"
      >
        <TrashIcon class="w-6 h-6 text-white" />
      </button>
    </div>
  </div>
</template>
