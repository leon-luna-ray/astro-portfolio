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
            </div>
        </div>
    </div>
</template>