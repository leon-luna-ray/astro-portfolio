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
        <div class='project-card'>
            <div class='img-wrap'>Image goes here</div>
            <h4>Responsive Design</h4>
            <p>Creating dazzling, responsive experiences for all devices.</p>
        </div>
        <div class='project-card'>
            <div class='img-wrap'>Image goes here</div>
            <h4>Responsive Design</h4>
            <p>Creating dazzling, responsive experiences for all devices.</p>
        </div>
        <div class='project-card'>
            <div class='img-wrap'>Image goes here</div>
            <h4>Responsive Design</h4>
            <p>Creating dazzling, responsive experiences for all devices.</p>
        </div>
        <div class='project-card'>
            <div class='img-wrap'>Image goes here</div>
            <h4>Responsive Design</h4>
            <p>Creating dazzling, responsive experiences for all devices.</p>
        </div>
        <div class='project-card'>
            <div class='img-wrap'>Image goes here</div>
            <h4>Responsive Design</h4>
            <p>Creating dazzling, responsive experiences for all devices.</p>
        </div>
        <div class='project-card'>
            <div class='img-wrap'>Image goes here</div>
            <h4>Responsive Design</h4>
            <p>Creating dazzling, responsive experiences for all devices.</p>
        </div>
    </div>
</template>