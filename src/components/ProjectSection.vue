<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';
import ProjectGroup from './ProjectGroup.vue';
import ProjectGrid from './ProjectGrid.vue';
import type { Project } from '../interfaces/Project';
import type { ProjectGroup as Group } from '../interfaces/ProjectGroup';

const props = defineProps({
    projects: {
        type: Array as () => Project[],
        required: true,
    },
    categories: {
        type: Array as () => Group[],
        required: false,
    },
});

const isCategory = ref(true);
</script>
<template>
    <template v-if="isCategory && categories?.length">
        <ProjectGroup v-for="item in categories" :data="item" />
    </template>
    <ProjectGrid v-else :projects="projects" />
</template>