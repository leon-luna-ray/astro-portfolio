<script setup lang="ts">
const props = defineProps({
    projects: {
        type: Array,
        required: true,
    },
})
</script>
<template>
    <div v-if="projects" class="featured-projects">
        <h2>Featured Projects</h2>
    </div>
</template>