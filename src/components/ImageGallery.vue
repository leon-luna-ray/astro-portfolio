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
    <div class="image-gallery">
        <div v-for="(image, index) in images" class="img-wrap">
            <img :src="getThumbnailUrl(image)" :alt="`Project Screenshot ${index + 1}`">
        </div>
    </div>
</template>