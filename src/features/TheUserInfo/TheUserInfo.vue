<script lang="ts" setup>
import { BaseHeading, BaseHeadingEnum } from '@/shared/uilib';

import { useUserStore } from '@/entities/user';

const { user } = useUserStore();
</script>

<template>
  <div>
    <BaseHeading :type="BaseHeadingEnum.h3">{{ user.userName }}</BaseHeading>
    <p class="text-base text-gray-500">{{ user.email }}</p>
  </div>
</template>
