<script setup lang="ts">
import { computed } from 'vue';
import { getMediumUrl } from '../lib/images';
import { getStatusIcon } from '../utils/utils';

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
        type: String,
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
    },
    status: {
        type: String,
        required: false,
    },
})

const labelText = computed(() => {
    if (props.status && props.status !== 'live') {
        return `${getStatusIcon(props.status)} ${props.status}`
    }
    if (props.isFeatured) {
        return 'Featured Project';
    }
    return null;
})
const showLanuchBtn = computed(() => {
    return props.status ? getStatusIcon(props.status) !== '⛔️' : true;
})
</script>
<template>
    <div class="detail-header">
        <div class="inner">
            <div class="image flex flex-shrink">
                <img :src="getMediumUrl(image)" :alt="`Screenshot of ${title}`">
            </div>
            <div class="text">
                <div v-if="labelText" class="label">{{ labelText }}</div>
                <h1 class="title">{{ title }}</h1>
                <div class="description">{{ intro }}</div>
                <div class="btn-links">
                    <a v-if="launchUrl && showLanuchBtn" class="btn light" :href="launchUrl" target="_blank">Launch</a>
                    <div v-else-if="launchUrl" class="btn disabled" :href="launchUrl" target="_blank">Launch</div>
                    <a v-if="codeUrl" class="btn dark" :href="codeUrl" target="_blank">Code</a>
                </div>
            </div>
        </div>
    </div>
</template>