<script setup lang="ts">
import { scrollToSection } from '../utils/utils';

const props = defineProps({
    showLinks: {
        type: Boolean,
        required: false,
    },
});

</script>
<template>
    <div class='hero'>
        <div class='hero-text'>
            <div class='inner'>
                <slot name="title"></slot>
                <slot name="subtitle"></slot>
                <slot name="intro"></slot>
            </div>
        </div>
        <!-- TODO find a way to refactor this -->
        <div v-if="showLinks" class='btn-links'>
            <a class="btn dark" @click.prevent="scrollToSection('#featured-skills')">Explore Skills</a>
            <a class="btn light" @click.prevent="scrollToSection('#featured-projects')">Check Projects</a>
        </div>
    </div>
</template>