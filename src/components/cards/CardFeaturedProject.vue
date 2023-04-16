<script setup lang="ts">
import { getThumbnailUrl } from '../../lib/images';

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
})

</script>
<template>
    <div v-if="project" class="card featured-project">
        <div class="image">
            <img :src="getThumbnailUrl(project?.mainImage)" alt="">
        </div>
        <div class="text">
            <h3>{{ project?.title }}</h3>
            <p>{{ project?.description[0].children[0].text }}</p>
            <div class="links">
                <a v-if="project.url" :href="project.url" target="_blank">View Project</a>
                <a v-if="project.repository" :href="project.repository" target="_blank">View Code</a>
            </div>
        </div>
    </div>
</template>