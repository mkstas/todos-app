<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    modelValue?: string;
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
  <input
    class="py-2 px-3 outline-none border border-zinc-300 focus:border-zinc-800 rounded"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    @value="modelValue"
    @change="update"
  />
</template>
