<script lang="ts" setup>
import { HeadingType, HeadingEnum } from './Heading.types';

defineProps<HeadingType>();
</script>

<template>
  <h1
    :class="`text-3xl font-semibold ${$attrs.class}`"
    v-if="type === HeadingEnum.h1"
  >
    <slot></slot>
  </h1>

  <h2
    :class="`text-2xl font-semibold ${$attrs.class}`"
    v-if="type === HeadingEnum.h2"
  >
    <slot></slot>
  </h2>

  <h3
    :class="`text-xl font-semibold ${$attrs.class}`"
    v-if="type === HeadingEnum.h3"
  >
    <slot></slot>
  </h3>
</template>
