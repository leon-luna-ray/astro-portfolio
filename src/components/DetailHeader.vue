<script setup lang="ts">
import { getMediumUrl } from '../lib/images';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: Object,
        required: true,
    },
    intro: {
        type: Object,
        required: false,
    },
    launchUrl: {
        type: String,
        required: false,
    },
    codeUrl: {
        type: String,
        required: false,
    },
    isFeatured: {
        type: Boolean,
        required: false,
    }
})
</script>
<template>
    <div class="detail-header">
        <div class="inner">
            <div class="image">
                <!-- <a href="/projects" class="btn dark hidden">
                    <span>{{ `Back` }}</span>
                </a> -->
                <img :src="getMediumUrl(image)" :alt="`Screenshot of ${title}`">
            </div>
            <div class="text">
                <div v-if="isFeatured" class="label">Featured Project</div>
                <h1>{{ title }}</h1>
                <div class="description">{{ intro }}</div>
                <div class="btn-links">
                    <a v-if="launchUrl" class="btn light" :href="launchUrl" target="_blank">Launch</a>
                    <a v-if="codeUrl" class="btn dark" :href="codeUrl" target="_blank">Code</a>
                </div>
            </div>
        </div>
    </div>
</template>