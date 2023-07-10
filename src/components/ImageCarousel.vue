<script setup lang="ts">
import { ref, computed } from 'vue'
import { useElementBounding } from '@vueuse/core'

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

const carouselRef = ref(null);
const { top } = useElementBounding(carouselRef);

const slideBgColor = (index: number) => {
    return index % 2 === 0 ? 'brown' : 'black';
}

const isTop = computed(() => ({
    'top': top.value < 300,
}))

</script>

<template>
    <div v-if="images?.length > 1" class='image-carousel' ref="carouselRef">
        <div :class="['slide top', slideBgColor(0)]">
            <img :src="getMediumUrl(images[0])" alt="test img" :class="isTop">
        </div>
        <div :class="['slide', slideBgColor(1)]">
            <img :src="getMediumUrl(profileImage)" alt="Profile Image" :class="isTop">
        </div>
        <div :class="['slide', slideBgColor(2)]">
            <img :src="getMediumUrl(images[1])" alt="test img" :class="isTop">
        </div>
    </div>
</template>