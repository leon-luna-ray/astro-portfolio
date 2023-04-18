<script setup lang="ts">
const props = defineProps({
    intro: String,
})
</script>
<template>
    <div class="hero-banner">
        <div class="inner">
            <div class="title">
                <h1>👨🏻‍🚀 <span>Hello World!</span> 🌎</h1>
            </div>
            <p>{{ intro }}</p>
            <p>This Page is in developement</p>
        </div>
    </div>
</template>