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
})
</script>
<template>
    <div class="detail-header">
        <div class="inner">
            <div class="title">
                <h1>{{ title }}</h1>
            </div>
            <div class="image">
                <img :src="getMediumUrl(image)" :alt="`Screenshot of ${title}`">
            </div>
        </div>
    </div>
</template>