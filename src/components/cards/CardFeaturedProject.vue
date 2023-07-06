<script setup lang="ts">
import { computed } from 'vue';
import { getThumbnailUrl } from '../../lib/images';

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
    showStatus: {
        type: Boolean,
        required: false,
    }

})
const projectUrl = computed(() => {
    return `/projects/${props.project?.slug?.current}`
})
const projectStatusText = (status: string): string => {
    if (status === 'live') {
        return '';
    }
    if (status === 'development') {
        return '🚧'
    }
    if(status === 'bug' || status === 'down'){
        return '⛔️'
    }
    return '⚠️'
}
</script>
<template>
    <div class='card featured-project'>
        <a class='img-wrap' :href="projectUrl">
            <img :src="getThumbnailUrl(project?.mainImage)" :alt="`Image of ${project.title}`">
        </a>
        <div class="text">
            <div class="project-title flex gap-x-[0.5rem] justify-between">
                <span class="title">{{ project.title }}</span>
                <div v-if="projectStatusText(project.status)" class="status">{{ projectStatusText(project.status) }}</div>
            </div>

            <div class="description">{{ project.intro }}</div>
        </div>
    </div>
</template>
