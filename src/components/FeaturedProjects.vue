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
    <div class='featured-projects'>
        <div class="project-grid">
            <CardFeaturedProject v-for="project in projects" :project="project"/>
        </div>
    </div>
</template>