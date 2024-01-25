<script setup lang="ts"></script>

<template>
  <div class="border-b border-zinc-300 p-4 space-y-2">
    <p class="text-lg font">Заголовок группы</p>
    <form @submit.prevent="" class="flex gap-2">
      <input
        type="text"
        class="border border-zinc-300 flex-1 rounded py-2 px-3"
        placeholder="Задача"
      />
      <button
        class="bg-green-500 hover:bg-green-600 text-white rounded py-2 px-3 shadow shadow-zinc-300/50"
      >
        Добавить
      </button>
    </form>
  </div>
</template>
