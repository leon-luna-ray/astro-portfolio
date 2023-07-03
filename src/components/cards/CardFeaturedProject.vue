<script setup lang="ts">
import { getSmallUrl } from '../../lib/images';

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
})

</script>

<template>
    <div class='card featured-project'>
        <a class='img-wrap' :href="project.url" target="_blank">
            <img :src="getThumbnailUrl(project?.mainImage)" :alt="`Image of ${project.title}`">
        </a>
        <div class="text">
            <span class="title">{{ project.title }}</span>
            <span class="description">{{ project?.description[0].children[0].text }}</span>
        </div>
    </div>
</template>
