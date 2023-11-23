<script lang="ts" setup>
import { BaseFormPropsType } from './BaseForm.types';

withDefaults(defineProps<BaseFormPropsType>(), {
  method: 'get',
});
</script>

<template>
  <form :method="method">
    <slot></slot>
  </form>
</template>
