<script lang="ts" setup>
import { computed } from 'vue';
import { BaseInputPropsType, BaseInputEnum } from './BaseInput.types';

const props = withDefaults(defineProps<BaseInputPropsType>(), {
  type: BaseInputEnum.text,
  required: false,
});

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value: string) {
    return emit('update:modelValue', value);
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="grid">
    <label v-if="label" class="pb-2 text-lg font-semibold" :for="id">
      {{ label }}
    </label>
    <input
      class="p-3 bg-white outline-none border border-gray-300 focus:border-gray-500 rounded-2xl text-xl text-gray-800 placeholder:text-gray-300"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :required="required"
    />
  </div>
</template>
