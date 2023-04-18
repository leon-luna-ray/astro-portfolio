<script lang="ts" setup>
const props = defineProps({
    title: String,
})
</script>
<template>
    <header id="site-header">
        <div class="container">
            <div id="logo">
                <img src="img/rl-logo-lw.png" alt="Ray Luna Full-stack web developer logo">
            </div>
            <nav>
                <a href="https://github.com/leon-luna-ray" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/leon-luna-ray" target="_blank">Linkedin</a>
            </nav>
        </div>
    </header>
</template>