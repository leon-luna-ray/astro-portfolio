<script lang="ts" setup>
import TechList from './TechList.vue';

const props = defineProps({
    skills: {
        type: Array as () => Array<{
            title: string,
            skills: Array<{ title: string }>
        }>,
        required: true,
    },
});
</script>
<template>
    <!-- TODO move classes to stylesheets, move text to sanity, move this component to astro file -->
    <div id="featured-skills" class="container flex flex-col gap-y-[2.5rem]">
        <div class="top">
            <div class='intro flex flex-col gap-y-[2rem]'>
                <h4 class="text-[1.25rem]">Skills and expertise</h4>
                <p>
                    I leverage a diverse range of tools to develop interactive web applications, utilizing content management systems, the latest backend and frontend frameworks, and multiple programming languages.

                    My expertise spans across different domains, including organizational websites, educational portals, and enterprise solutions.
                </p>
            </div>
        </div>
        <div class="bottom grid md:grid-cols-3 gap-[2rem]">
            <div v-for="list in skills" class="lists flex flex-col gap-y-[2rem]">
                <h4 class="title text-[1.125em]">{{ list.title }}</h4>
                <TechList :items="list.skills" />
            </div>
        </div>
    </div>
</template>