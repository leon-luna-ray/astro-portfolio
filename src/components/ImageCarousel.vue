<script setup lang="ts">
import { getMediumUrl } from '../lib/images';
import type Image from '../interfaces/Image';

const props = defineProps({
    profileImage: {
        type: Object as () => { url: string; alt: string },
        required: true,
    },
    images: {
        type: Array as () => Image[],
        required: true,
    },
});

const slideBgColor = (index: number) => {
    return index % 2 === 0 ? 'brown' : 'black';
}
</script>

<template>
    <div v-if="images?.length > 1" class='image-carousel'>
        <div :class="['slide', slideBgColor(0)]">
            <img :src="getMediumUrl(images[0])" alt="test img">
        </div>
        <div :class="['slide', slideBgColor(1)]">
            <img :src="getMediumUrl(profileImage)" alt="Profile Image">
        </div>
        <div :class="['slide', slideBgColor(2)]">
            <img :src="getMediumUrl(images[1])" alt="test img">
        </div>
    </div>
</template>