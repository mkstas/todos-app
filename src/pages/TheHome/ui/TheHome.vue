<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';
import { BaseLogotype, BaseButtonLink, BaseContainer } from '@/shared/uilib';

const isMobile = ref(false);
const isOpenMobileMenu = ref(false);

const currentYear = new Date().getFullYear();

const checkIsMobile = () => {
  if (window.innerWidth < 768) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
    isOpenMobileMenu.value = false;
  }
};

const onClickBurger = () => {
  isOpenMobileMenu.value = !isOpenMobileMenu.value;
};

onMounted(() => {
  checkIsMobile();
  window.addEventListener('resize', checkIsMobile);
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="fixed top-0 left-0 z-50 w-full p-3">
      <nav class="flex justify-between items-center">
        <RouterLink :to="RoutesPathEnum.home">
          <BaseLogotype />
        </RouterLink>

        <ul v-if="!isMobile" class="flex justify-start items-center gap-4">
          <li>
            <BaseButtonLink :to="RoutesPathEnum.signin"> Вход </BaseButtonLink>
          </li>
          <li>
            <BaseButtonLink :to="RoutesPathEnum.signup">
              Регистрация
            </BaseButtonLink>
          </li>
        </ul>

        <ul
          v-if="isOpenMobileMenu"
          class="fixed z-10 top-0 left-0 w-full h-full bg-white py-16 px-8"
        >
          <li>
            <RouterLink
              class="block p-4 text-lg font-medium hover:text-sky-600 transition-colors"
              :to="RoutesPathEnum.signin"
            >
              Вход
            </RouterLink>
          </li>
          <li>
            <RouterLink
              class="block p-4 text-lg font-medium hover:text-sky-600 transition-colors"
              :to="RoutesPathEnum.signup"
            >
              Регистрация
            </RouterLink>
          </li>
        </ul>

        <button
          v-if="isMobile"
          class="fixed z-20 right-1 grid gap-[0.375rem] w-10 p-2"
          @click="onClickBurger"
        >
          <span class="block w-full h-[0.125rem] bg-gray-800 rounded-md"></span>
          <span class="block w-full h-[0.125rem] bg-gray-800 rounded-md"></span>
          <span class="block w-full h-[0.125rem] bg-gray-800 rounded-md"></span>
        </button>
      </nav>
    </header>

    <main class="flex-1 pt-16 bg-gradient-to-b from-sky-50 to-white">
      <section class="py-24">
        <BaseContainer>
          <div
            class="max-w-xl md:max-w-3xl mx-auto text-balance grid items-center"
          >
            <h1
              class="mb-8 text-center text-3xl md:text-5xl lg:text-5xl font-bold"
            >
              Организуйте свои дела в работе и в жизни
            </h1>
            <p class="mb-12 text-lg md:text-2xl text-center text-gray-500">
              Task Tracker поможет вам организовать и упорядочить свои цели и
              задачи
            </p>
            <BaseButtonLink class="mx-auto text-lg" :to="RoutesPathEnum.signup">
              Начать сейчас
            </BaseButtonLink>
          </div>
        </BaseContainer>
      </section>
    </main>

    <footer class="py-8">
      <BaseContainer>
        <p class="text-lg text-center text-gray-500">
          © Task Tracker, 2023 - {{ currentYear }}
        </p>
      </BaseContainer>
    </footer>
  </div>
</template>
