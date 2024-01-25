<script setup lang="ts">
import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const isEditOpen = ref(false);
const isAddOpen = ref(false);

const openAdd = () => {
  isAddOpen.value = !isAddOpen.value;
};

const openEdit = () => {
  isEditOpen.value = !isEditOpen.value;
};
</script>

<template>
  <div
    class="max-w-5xl grid grid-cols-[12rem_1fr] h-[32rem] w-full bg-white rounded overflow-hidden border border-zinc-300 shadow shadow-zinc-300/50"
  >
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
        @click="openAdd"
        class="flex justify-between items-center text-white w-full py-2 px-3 hover:bg-zinc-800 rounded"
      >
        <span>Добавить</span>
        <PlusCircleIcon class="w-5 h-5" />
      </button>
    </aside>
    <main>
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
      <div class="px-4 divide-y divide-zinc-300">
        <div class="flex justify-between items-start gap-2 py-4">
          <div class="flex-1">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, eveniet!
            </p>
          </div>
          <button
            @click="openEdit"
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
    </main>
  </div>

  <div
    v-if="isAddOpen"
    class="flex justify-center items-center absolute w-full h-full bg-black/50 z-50"
  >
    <div
      class="bg-white shadow shadow-zinc-600/50 rounded max-w-lg w-full divide-y divide-zinc-300"
    >
      <div class="flex p-4">
        <p class="flex-1 items-start text-lg">Создание группы задач</p>
        <button
          class="bg-red-500 p-1 rounded-full shadow shadow-zinc-300/50"
          @click="openAdd"
        >
          <XMarkIcon class="w-5 h-5 text-white" />
        </button>
      </div>
      <div class="p-4">
        <form @submit.prevent="" class="grid gap-4">
          <input
            type="text"
            class="border border-zinc-300 flex-1 rounded py-2 px-3"
            placeholder="Название группы"
          />
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-3 shadow shadow-zinc-300/50"
          >
            Создать группу
          </button>
        </form>
      </div>
    </div>
  </div>

  <div
    v-if="isEditOpen"
    class="flex justify-center items-center absolute w-full h-full bg-black/50 z-50"
  >
    <div
      class="bg-white shadow shadow-zinc-600/50 rounded max-w-lg w-full divide-y divide-zinc-300"
    >
      <div class="flex items-start p-4">
        <p class="flex-1 text-lg">Редактирование задачи</p>
        <button
          class="bg-red-500 p-1 rounded-full shadow shadow-zinc-300/50"
          @click="openEdit"
        >
          <XMarkIcon class="w-5 h-5 text-white" />
        </button>
      </div>
      <div class="p-4">
        <form @submit.prevent="" class="grid gap-4">
          <input
            type="text"
            class="border border-zinc-300 flex-1 rounded py-2 px-3"
            placeholder="Задача"
          />
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-3 shadow shadow-zinc-300/50"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
