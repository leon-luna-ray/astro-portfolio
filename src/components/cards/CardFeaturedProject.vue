<script setup lang="ts">
import { getThumbnailUrl } from '../../lib/images';
import { sanityPortableText } from '../../lib/text';

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
            <div class="description" v-html="sanityPortableText(project?.description[0])"></div>
        </div>
    </div>
</template>
