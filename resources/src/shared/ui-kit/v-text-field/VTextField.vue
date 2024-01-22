<script setup lang="ts">
import { VTextFieldPropsType } from './VTextField.types';

withDefaults(defineProps<VTextFieldPropsType>(), {
  type: 'text',
  required: false,
});

const emit = defineEmits(['update:modelValue']);

const update = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="grid">
    <label v-if="label" :for="id" class="pb-1 text-gray-400">
      {{ label }}
    </label>
    <input
      @value="modelValue"
      @change="update"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="w-full outline-none border border-gray-300 focus:border-gray-500 rounded px-4 py-2 placeholder:text-gray-300"
    />
    <span v-if="error" class="text-red-500 pt-2">{{ error }}</span>
  </div>
</template>
