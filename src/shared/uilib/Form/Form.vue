<script lang="ts" setup>
import { FormMethodsEnum, FormPropsType } from './Form.types';

withDefaults(defineProps<FormPropsType>(), {
  method: FormMethodsEnum.post,
});
</script>

<template>
  <form :method="method">
    <slot></slot>
  </form>
</template>
