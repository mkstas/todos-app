<script setup lang="ts">
import { IProps } from './VTextField.types';

withDefaults(defineProps<IProps>(), {
  type: 'text',
  required: false,
  disabled: false,
});

const emit = defineEmits(['update:modelValue']);

const change = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div>
    <label class="pb-2" :for="id">{{ label }}</label>
    <input
      class="w-full px-3 py-2 border border-slate-200 outline-none focus:border-slate-800 rounded-lg"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :value="modelValue"
      @change="change"
    />
    <span v-if="error" class="block mt-2 text-red-500">{{ error }}</span>
  </div>
</template>
