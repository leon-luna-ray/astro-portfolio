<script setup lang="ts">
import { getMediumUrl } from '../lib/images';
import { sanityPortableText } from '../lib/text';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: Object,
        required: true,
    },
    description: {
        type: Object,
        required: true,
    },
    launchUrl: {
        type: String,
        required: false,
    },
    codeUrl: {
        type: String,
        required: false,
    },
})
</script>
<template>
    <div class="detail-header">
        <div class="inner">
            <div class="image">
                <img :src="getMediumUrl(image)" :alt="`Screenshot of ${title}`">
            </div>
            <div class="text">
                <h1>{{ title }}</h1>
                <div class="description" v-html="sanityPortableText(description)"></div>
                <div class="btn-links">

                    <a v-if="launchUrl" class="btn light" :href="launchUrl" target="_blank">Launch</a>
                    <a v-if="codeUrl" class="btn dark" :href="codeUrl" target="_blank">Code</a>
                </div>
            </div>
        </div>
    </div>
</template>