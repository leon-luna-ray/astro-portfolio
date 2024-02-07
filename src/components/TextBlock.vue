<template>
    <div class="flex-col-1 container">
        <slot name="title"></slot>
        <div class="richtext" v-if="text && isRichtext" v-html="sanityPortableText(text)"></div>
        <div class="richtext" v-if="text">{{ text }}</div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { sanityPortableText } from '../lib/text';

const props = defineProps({
    text: {
        type: [String, Object],
        required: false
    },
});

const isRichtext = computed(() => {
    return typeof props.text === 'object';
});
</script>