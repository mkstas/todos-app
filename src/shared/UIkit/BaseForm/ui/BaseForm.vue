<script lang="ts" setup>
import { BaseFormPropsType } from './BaseForm.types';

withDefaults(defineProps<BaseFormPropsType>(), {
  method: 'get',
});
</script>

<template>
  <form :method="method" @submit.prevent>
    <slot></slot>
  </form>
</template>
