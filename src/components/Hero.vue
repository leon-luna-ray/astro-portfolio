<script setup lang="ts">
const scrollToSection = (id: string): void => {
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};
</script>
<template>
    <div class='hero'>
        <div class='hero-text'>
            <div class='inner'>
                <slot name="title"></slot>
                <h2 class="subtitle">Code with style</h2>
                <slot name="intro"></slot>
            </div>
        </div>
        <div class='btn-links'>
            <a class="btn dark" @click.prevent="scrollToSection('#featured-skills')">Explore Skills</a>
            <a class="btn light" @click.prevent="scrollToSection('#featured-projects')">Check Projects</a>
        </div>
    </div>
</template>