<script lang="ts" setup>
import { Heading, HeadingEnum } from '@/shared/uilib';

import { useUserStore } from '@/entities/user';

const { user } = useUserStore();
</script>

<template>
  <div>
    <Heading :type="HeadingEnum.h3">{{ user.userName }}</Heading>
    <p class="text-base text-gray-500">{{ user.email }}</p>
  </div>
</template>
