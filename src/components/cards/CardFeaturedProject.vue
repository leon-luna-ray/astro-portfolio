<script setup lang="ts">
import { computed } from 'vue';
import { getThumbnailUrl } from '../../lib/images';

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
});

const projectStatusText = (status: string): string => {
    if (status === 'live') {
        return '';
    }
    if (status === 'development') {
        return '🚧'
    }
    if (status === 'bug' || status === 'down') {
        return '⛔️'
    }
    return '⚠️'
};

const projectUrl = computed(() => {
    return `/projects/${props.project?.slug?.current}`
});
</script>
<template>
    <a :href="projectUrl" class="no-underline">
        <div class='flex flex-col-1 zoom-in-out'>
            <img :src="getThumbnailUrl(project.mainImage?._id)" :alt="project.mainImage?.altText || `Image of ${project.title}`" class=" rounded-image ">
            <div class="flex flex-col gap-y-[0.625rem] text-[1.125rem]">
                <div class="project-title flex gap-x-[0.5rem] justify-between">
                    <span class="font-bold dark:text-light-yellow/90 leading-[100%]">{{ project.title }}</span>
                    <div v-if="projectStatusText(project.status)" class="status">{{ projectStatusText(project.status) }}</div>
                </div>
                <div class="line-clamp-3 leading-[130%] text-[1rem]">{{ project.intro }}</div>
            </div>
        </div>
    </a>
</template>
