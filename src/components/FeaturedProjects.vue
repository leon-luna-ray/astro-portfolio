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
    <div id="featured-projects" class='featured-projects'>
        <div class="section-title">
            <h3>Featured Projects</h3>
        </div>
        <div class="project-grid">
            <CardFeaturedProject v-for="project in projects" :project="project"/>
        </div>
    </div>
</template>