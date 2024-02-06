<script setup lang="ts">
import { sanityPortableText } from '../lib/text';

import ProjectGrid from './ProjectGrid.vue';
import type { ProjectGroup } from '../interfaces/ProjectGroup';

const props = defineProps({
    data: {
        type: Object as () => ProjectGroup,
        required: true,
    },
});

</script>
<template>
    <div class="container md:py-[2rem]">
        <div class="container text-center pb-[3rem] flex flex-col gap-y-[1rem]">
            <h2 class="h3">{{ data.title }}</h2>
            <div v-html="sanityPortableText(data.description)" class="text-[1.25rem]"></div>
        </div>
        <ProjectGrid :projects="data.projects" :min-grid-cols="2"/>
    </div>
</template>