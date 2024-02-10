<script setup lang="ts">
import { getThumbnailUrl } from '../lib/images';

const props = defineProps({
    images: {
        type: Array,
        required: true,
    },
});
</script>
<template>
    <div class="grid grid-cols-2 xl:grid-cols-3 gap-[1rem]">
        <div v-for="(image, index) in images">
            <img :src="getThumbnailUrl(image)" :alt="`Project Screenshot ${index + 1}`" class="rounded-2xl border border-neutral-brown w-full">
        </div>
    </div>
</template>