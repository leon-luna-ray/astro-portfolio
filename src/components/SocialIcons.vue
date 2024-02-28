<script setup lang="ts">
import IconEmail from './icons/IconEmail.vue';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedin from './icons/IconLinkedin.vue';

const props = defineProps({
    email: {
        type: String,
    },
    github: {
        type: String,
    },
    linkedin: {
        type: String,
    },
});
</script>

<template>
    <div class='social-icons flex gap-x-[1.25rem]'>
        <a v-if="email" :href="`mailto:${email}`" aria-label="Email">
            <IconEmail />
        </a>
        <a v-if="github" :href="github" target="_blank" aria-label="GitHub">
            <IconGithub />
        </a>
        <a v-if="linkedin" :href="linkedin" target="_blank" aria-label="LinkedIn">
            <IconLinkedin />
        </a>
    </div>
</template>
