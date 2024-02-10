<script setup lang="ts">
import { computed } from 'vue';
import CardFeaturedProject from './cards/CardFeaturedProject.vue';
import type { Project } from '../interfaces/Project';

const props = defineProps({
    projects: {
        type: Array as () => Project[],
        required: true,
    },
    minGridCols: {
        type: Number,
        required: false,
        default: 1,
    },

});

const gridCols = computed(() => ({
    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': props.minGridCols === 1,
    'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4': props.minGridCols === 2,
    'grid-cols-3': props.minGridCols === 3,
}));
</script>

<template>
    <ul :class="['grid gap-[2rem]', gridCols]">
        <li v-for="project in projects">
            <CardFeaturedProject :project="project" :key="project._id" />
        </li>
    </ul>
</template>
