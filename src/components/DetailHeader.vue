<template>
    <div class="detail-header border-black pt-[2.5rem] md:pb-0 md:pt-[4rem]">
        <div class="stickty top-0 container flex items-center gap-x-[0.25rem] pb-[1rem] title-text-theme">
            <IconChevronLeft class="h-[1.25rem]" />
            <a href="/projects" class="uppercase font-[600] no-underline hover:underline">Projects</a>
        </div>
        <div class="inner md:container grid md:grid-cols-2 gap-y-[3.125rem] md:gap-[4rem]">
            <div class="flex flex-col gap-y-[1.5rem] order-last md:order-none flex-shrink">
                <img :src="getMediumUrl(image._id)" :alt="image.altText || `Screenshot of ${title}`"
                    class="aspect-square object-cover md:rounded-3xl border-y md:border-2 border-neutral-brown w-full">
            </div>
            <div class="text flex flex-col gap-y-[1rem] lg:gap-y-[2.5rem] items-center justify-center text-center">
                <div v-if="labelText"
                    class="bg-neutral-brown text-beige uppercase py-[0.3rem] px-[0.6rem] font-semibold text-[0.75rem] rounded-lg">
                    {{ labelText }}</div>
                <h1 class="text-[3rem] lg:text-[4rem]">{{ title }}</h1>
                <div class="description text-[1.25rem] md:line-clamp-5">{{ intro }}</div>
                <div class="btn-links">
                    <a v-if="launchUrl && showLanuchBtn" class="btn primary" :href="launchUrl"
                        target="_blank">Launch</a>
                    <div v-else-if="launchUrl" class="btn disabled" :href="launchUrl" target="_blank">Launch</div>
                    <a v-if="codeUrl" class="btn secondary" :href="codeUrl" target="_blank">Code</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { getMediumUrl } from '../lib/images';
import { getStatusIcon } from '../utils/utils';
import IconArrowBack from '../components/icons/IconArrowBack.vue';
import IconChevronLeft from './icons/IconChevronLeft.vue';
// import type IconChevronLeft from './icons/IconChevronLeft.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: Object,
        required: true,
    },
    intro: {
        type: String,
        required: false,
    },
    launchUrl: {
        type: String,
        required: false,
    },
    codeUrl: {
        type: String,
        required: false,
    },
    isFeatured: {
        type: Boolean,
        required: false,
    },
    status: {
        type: String,
        required: false,
    },
})

const labelText = computed(() => {
    if (props.status && props.status !== 'live') {
        return `${getStatusIcon(props.status)} ${props.status}`
    }
    if (props.isFeatured) {
        return 'Featured Project';
    }
    return null;
})
const showLanuchBtn = computed(() => {
    return props.status ? getStatusIcon(props.status) !== '⛔️' : true;
})
</script>