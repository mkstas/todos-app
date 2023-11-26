<script lang="ts" setup>
import { computed } from 'vue';
import { BaseInputPropsType, BaseInputTypeEnum } from './BaseInput.types';

const props = withDefaults(defineProps<BaseInputPropsType>(), {
  type: BaseInputTypeEnum.text,
  required: true,
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
    <label v-if="label" class="pb-1 text-base font-semibold" :for="id">
      {{ label }}
    </label>
    <input
      class="px-3 py-2 bg-white outline-none border border-gray-300 focus:border-gray-500 rounded-2xl text-base text-gray-800 placeholder:text-gray-300"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :required="required"
    />
  </div>
</template>
