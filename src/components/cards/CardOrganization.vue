<template>
    <a v-if="org.website" :href="org.website" target="_blank" class="no-underline flex gap-x-[1rem] items-center hover:underline">
        <img :src="getThumbnailUrl(org.image)" :alt="`${org.title} logo`" class="w-[2rem] h-[2rem] rounded-full" />
        <span class="text-[1.125rem]">{{ org.title }}</span>
    </a>
</template>
<script setup lang="ts">
import { getThumbnailUrl } from '../../lib/images';
import type { Organization } from '../../interfaces/Organization';
const props = defineProps<{ org: Organization; }>();
</script>