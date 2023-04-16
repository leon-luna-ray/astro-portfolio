<script lang="ts" setup>
const props = defineProps({
    title: String,
})
</script>
<template>
    <header id="site-header">
        <div class="title">
            <h2>{{ title }}</h2>
        </div>
        <nav>
            <a href="https://github.com/leon-luna-ray" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/leon-luna-ray" target="_blank">Linkedin</a>
        </nav>
    </header>
</template>