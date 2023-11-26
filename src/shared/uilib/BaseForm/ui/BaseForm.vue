<script lang="ts" setup>
import { BaseFormMethodsEnum, BaseFormPropsType } from './BaseForm.types';

withDefaults(defineProps<BaseFormPropsType>(), {
  method: BaseFormMethodsEnum.get,
});
</script>

<template>
  <form :method="method">
    <slot></slot>
  </form>
</template>
