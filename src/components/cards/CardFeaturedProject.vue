<script setup lang="ts">
import { computed } from 'vue';
import { getThumbnailUrl } from '../../lib/images';
import { sanityPortableText } from '../../lib/text';

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },


})
const projectUrl = computed(() => {
    return `/projects/${props.project?.slug?.current}`
})
</script>
<template>
    <div class='card featured-project'>
        <a class='img-wrap' :href="projectUrl">
            <img :src="getThumbnailUrl(project?.mainImage)" :alt="`Image of ${project.title}`">
        </a>
        <div class="text">
            <span class="title">{{ project.title }}</span>
            <div class="description" v-html="sanityPortableText(project?.description[0])"></div>
        </div>
    </div>
</template>
