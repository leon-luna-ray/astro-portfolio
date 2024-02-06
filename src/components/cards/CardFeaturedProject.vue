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
    <div class='flex flex-col gap-y-[1.875rem]'>
        <a :href="projectUrl">
            <img :src="getThumbnailUrl(project?.mainImage)" :alt="`Image of ${project.title}`" class="zoom-in-out rounded-image">
        </a>
        <div class="flex flex-col gap-y-[0.625rem] text-[1.125rem]">
            <div class="project-title flex gap-x-[0.5rem] justify-between">
                <span class="font-bold">{{ project.title }}</span>
                <div v-if="projectStatusText(project.status)" class="status">{{ projectStatusText(project.status) }}</div>
            </div>
            <div class="line-clamp-3">{{ project.intro }}</div>
        </div>
    </div>
</template>
