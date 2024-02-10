<script setup lang="ts">
import IconEmail from './icons/IconEmail.vue';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedin from './icons/IconLinkedin.vue';

const props = defineProps({
    name: {
        type: String,
        default: 'Ray Luna',
    },
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

const year = new Date().getFullYear();
</script>
<template>
    <footer class="flex flex-col justify-center items-center gap-y-[1.875rem]">
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
        <div class='copyright'>
            <p>© {{ year }} {{ name }}. All rights reserved.</p>
        </div>
    </footer>
</template>