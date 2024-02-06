<template>
    <div class="flex flex-col gap-y-[2rem]">
        <slot name="title"></slot>
        <slot name="text"></slot>
        <div class="richtext" v-if="isRichtext" v-html="renderText(text)"></div>
        <div class="richtext" v-else>{{ text }}</div>
    </div>
</template>
<script setup lang="ts">
import { sanityPortableText } from '../lib/text';

const props = defineProps({
    isRichtext: {
        type: Boolean,
        default: false
    },
    text: {
        type: [String, Object],
        required: true
    },
});

const renderText = (text: [String, Object]) => {
    if (typeof text === 'string') {
        return text;
    } else {
        return sanityPortableText(text);
    }
};
</script>