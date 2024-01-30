<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: string;
    placeholder?: string;
    error?: string;
    modelValue?: string;
    required?: boolean;
    disabled?: boolean;
  }>(),
  {
    type: 'text',
    required: false,
    disabled: false,
  },
);

const emit = defineEmits(['update:modelValue']);

const update = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="space-y-2">
    <input
      class="w-full px-3 py-2 border border-slate-200 outline-none focus:border-slate-800 rounded-lg"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :value="modelValue"
      @change="update"
    />
    <span class="text-red-500">{{ error }}</span>
  </div>
</template>
