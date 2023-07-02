<script setup lang="ts">
const props = defineProps({
    intro: {
        type: String,
    },
})

const scrollToSection = (id: string): void => {
    console.log('click!')
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

console.log('is this working?')
</script>
<template>
    <div class='hero'>
        <div class='hero-text'>
            <div class='inner'>
                <h1 class='title'>Ray Luna</h1>
                <h2 class="subtitle">Code with style</h2>
                <p class='intro'>
                    {{ intro }}
                </p>
            </div>
        </div>
        <div class='btn-links'>
            <a class="btn dark" @click.prevent="scrollToSection('#skills')">Explore Skills</a>
            <a class="btn light" href='#featured-projects'>Check Projects</a>
        </div>
    </div>
</template>