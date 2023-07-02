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

const year = new Date().getFullYear();
</script>
<template>
    <footer id="footer">
        <div class='social-icons'>
            <a v-if="email" :href="`mailto:${email}`">
                <IconEmail />
            </a>
            <a v-if="github" :href="github" target="_blank">
                <IconGithub />
            </a>
            <a v-if="linkedin" :href="linkedin" target="_blank">
                <IconLinkedin />
            </a>
        </div>
        <div class='copyright'>
            <p>© {{ year }} Ray Luna. All rights reserved.</p>
        </div>
    </footer>
</template>