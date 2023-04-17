<script setup lang="ts">
const props = defineProps({
    intro: String,
})
</script>
<template>
    <div class="hero-banner">
        <div class="container inner">
            <div class="title">
                <h1>👨🏻‍🚀 <span>Hello World!</span> 🌎</h1>
            </div>
            <p>{{ intro }}</p>
        </div>
    </div>
</template>