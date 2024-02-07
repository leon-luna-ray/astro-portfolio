<script setup lang="ts">
import { computed, watch } from 'vue';
import { useStore } from '@nanostores/vue'
import { $techFilter } from '../stores/projects.js'

const techFilter = useStore($techFilter)

watch(techFilter, () => {
    console.log(techFilter.value)
})

import CardFeaturedProject from './cards/CardFeaturedProject.vue';
import type { Project } from '../interfaces/Project';

const props = defineProps({
    projects: {
        type: Array as () => Project[],
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    showLink: {
        type: Boolean,
        required: false,
    },
    minGridCols: {
        type: Number,
        required: false,
        default: 1,
    },

});

const gridCols = computed(() => ({
    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': props.minGridCols === 1,
    'grid-cols-2 lg:grid-cols-3': props.minGridCols === 2,
    'grid-cols-3': props.minGridCols === 3,
}));
</script>

<template>
    <ul :class="['grid container gap-[2.5rem]', gridCols]">
        <li v-for="project in projects">
            <CardFeaturedProject :project="project" :key="project._id" />
        </li>
    </ul>
</template>
