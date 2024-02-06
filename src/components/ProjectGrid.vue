<script setup lang="ts">
import { watch } from 'vue';
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
    }
});
</script>

<template>
    <div id="featured-projects" class='featured-projects'>
        <div v-if="title" class="container pb-[4rem] flex flex-col md:flex-row justify-between gap-y-[1rem]">
            <h3 class="text-[1.25rem]">{{ title }}</h3>
            <a v-if="showLink" class="uppercase font-bold" href="/projects">View All</a>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 container gap-[2.5rem]">
            <CardFeaturedProject v-for="project in projects" :project="project" :key="project._id" />
        </div>
    </div>
</template>
