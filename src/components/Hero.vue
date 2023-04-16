<script setup lang="ts">
const props = defineProps({
    intro: String,
})
</script>
<template>
    <div class="hero">
        <div class="inner">
            <h1>🧑‍🚀 Hello, World!</h1>
            <p>{{ intro }}</p>
        </div>
    </div>
</template>