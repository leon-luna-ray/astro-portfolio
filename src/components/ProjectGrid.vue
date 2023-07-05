<script setup lang="ts">
import CardFeaturedProject from './cards/CardFeaturedProject.vue';
import type Project from '../interfaces/Project';

const props = defineProps({
    projects: {
        type: Array as () => Project[],
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
});
</script>
<template>
    <div id="featured-projects" class='featured-projects'>
        <div v-if="title" class="section-title">
            <h3>{{ title }}</h3>
        </div>
        <div class="project-grid">
            <CardFeaturedProject v-for="project in projects" :project="project" :key="project._id"/>
        </div>
    </div>
</template>