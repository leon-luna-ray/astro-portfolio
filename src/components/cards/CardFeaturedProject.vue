<script setup lang="ts">
import { computed } from 'vue';
import { getThumbnailUrl } from '../../lib/images';

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },


})
const projectUrl = computed(() => {
    return `/projects/${props.project?.slug?.current}`
})
const statusIcon = computed(() => {
    return props.project?.status === 'live' ? null : '⚠️';
})
</script>
<template>
    <div class='card featured-project'>
        <a class='img-wrap' :href="projectUrl">
            <img :src="getThumbnailUrl(project?.mainImage)" :alt="`Image of ${project.title}`">
        </a>
        <div class="text">
            <div class="project-title flex gap-x-[0.5rem]">
                <span class="title">{{ project.title }}</span>
                <span v-if="statusIcon" class="status">{{ statusIcon }}</span>
            </div>
            <div class="description">{{ project.intro }}</div>
        </div>
    </div>
</template>
