<script setup lang="ts">
import { getThumbnailUrl } from '../lib/images';

import type { GalleryImage } from '../interfaces/Image';

const props = defineProps({
    images: {
        type: Array as () => GalleryImage[],
        required: true,
    },
});
</script>
<template>
    <div class="grid grid-cols-2 xl:grid-cols-3 gap-[1rem]">
        <div v-for="(image, index) in images">
            <img :src="getThumbnailUrl(image.image)" :alt="image.image.altText" class="rounded-2xl border border-neutral-brown w-full">
        </div>
    </div>
</template>