<script setup lang="ts">
import IconEmail from './icons/IconEmail.vue';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedin from './icons/IconLinkedin.vue';

const year = new Date().getFullYear();
</script>
<template>
    <footer id="footer">
        <div class='social-icons'>
            <a href='#'>
                <IconEmail />
            </a>
            <a href='#'>
                <IconGithub />
            </a>
            <a href='#'>
                <IconLinkedin />
            </a>
        </div>
        <div class='copyright'>
            <p>© {{ year }} Ray Luna. All rights reserved.</p>
        </div>
    </footer>
</template>