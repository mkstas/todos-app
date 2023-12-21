<script lang="ts" setup>
import { BaseHeading, BaseHeadingEnum } from '@/shared/uilib';

import { TheTaskListPropsType } from './TheTaskList.types';

defineProps<TheTaskListPropsType>();
</script>

<template>
  <div>
    <BaseHeading :type="BaseHeadingEnum.h2">
      {{ title }}
    </BaseHeading>
  </div>
</template>
