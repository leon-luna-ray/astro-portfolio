<template>
    <footer class="flex flex-col justify-center items-center gap-y-[1.875rem]">
        <SocialIcons :email="email" :github="github" :linkedin="linkedin" />
        <div class='copyright'>
            <p>© {{ year }} {{ name }}. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import SocialIcons from './SocialIcons.vue';

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
