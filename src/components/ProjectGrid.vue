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
    <div id="featured-projects" class='featured-projects'>
        <div v-if="title" class="container pb-[4rem] flex justify-between gap-y-[1rem] w-[95%]">
            <h3 class="text-[1.25rem]">{{ title }}</h3>
            <a v-if="showLink" class="uppercase font-bold" href="/projects">View All</a>
        </div>
        <div :class="['grid container gap-[2.5rem]', gridCols]">
            <CardFeaturedProject v-for="project in projects" :project="project" :key="project._id" />
        </div>
    </div>
</template>
