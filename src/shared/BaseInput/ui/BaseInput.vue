<script lang="ts" setup>
import { BaseInputPropsType } from './BaseInput.types';

withDefaults(defineProps<BaseInputPropsType>(), {
  type: 'text',
});
</script>

<template>
  <div class="grid">
    <label class="pb-2 text-lg font-semibold" :for="id">{{ label }}</label>
    <input
      class="p-3 bg-white outline-none border border-gray-300 focus:border-gray-500 rounded-2xl text-xl text-gray-800 placeholder:text-gray-300"
      :type="type"
      :placeholder="placeholder"
      :id="id"
    />
  </div>
</template>
