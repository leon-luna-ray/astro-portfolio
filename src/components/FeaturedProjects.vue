<script setup lang="ts">
import CardFeaturedProject from './cards/CardFeaturedProject.vue';

const props = defineProps({
    projects: {
        type: Array,
        required: true,
    },
})

console.log(props.projects)
</script>
<template>
    <div class='featured-projects'>
        <div class="project-grid">
            <div v-for="project in projects" class='card featured-project'>
                <div class='img-wrap'>
                    <img src="../assets/img/ruta1x1.jpg" alt="">
                </div>
                <div class="text">
                    <span class="title">Responsive Design</span>
                    <span class="description">Creating dazzling, responsive experiences for all devices.</span>
                </div>
            </div>
        </div>
    </div>
</template>