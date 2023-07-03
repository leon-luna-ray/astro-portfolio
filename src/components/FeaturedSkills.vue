<script lang="ts" setup>
import LinkList from './LinkList.vue';
import TextTout from './TextTout.vue';

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
    <div id="featured-skills" class='skills-list'>
        <div class="top">
            <div class='intro'>
                <h3 class="title">Skills and expertise</h3>
                <p>
                    I leverage a diverse range of tools to develop interactive web applications, utilizing content management systems, the latest backend and frontend frameworks, and multiple programming languages.

                    My expertise spans across different domains, including organizational websites, educational portals, and enterprise solutions.
                </p>
            </div>
        </div>
        <div class="bottom">
            <div v-for="list in skills" class="list">
                <h3 class="title">{{ list.title }}</h3>
                <LinkList>
                    <li v-for="skill in list.skills">{{ skill.title }}</li>
                </LinkList>
            </div>
        </div>
    </div>
</template>