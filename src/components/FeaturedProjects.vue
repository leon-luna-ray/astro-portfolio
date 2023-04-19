<script setup lang="ts">
import CardFeaturedProject from './cards/CardFeaturedProject.vue';

const props = defineProps({
    projects: {
        type: Array,
        required: true,
    },
})
</script>
<template>
    <div v-if="projects" class="featured-projects">
        <div class="md:container">
            <h2>Featured Projects</h2>
            <div class="projects">
                <CardFeaturedProject v-for="project in projects" :key="project._id" :project="project" />
            </div>
        </div>
    </div>
</template>