<template>
    <div class="flex-col-1">
        <slot name="title"></slot>
        <div class="richtext" v-if="text && isRichtext" v-html="sanityPortableText(text)" ref="richtextRef"></div>
        <div class="richtext" v-else-if="text">{{ text }}</div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { sanityPortableText } from '../lib/text';

const props = defineProps({
    text: {
        type: [String, Array],
        required: false
    },
    isRichtext: {
        type: Boolean,
        default: false
    },
});

const richtextRef = ref<HTMLElement | null>(null);

// Set client:load for this to work on richtext
const setLinkTargets = () => {
    if (richtextRef.value) {
        const links = richtextRef.value.querySelectorAll('a');
        links.forEach((link) => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('/')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }
}
onMounted(() => {
    if (props.isRichtext) {
        setLinkTargets();
    }
});
</script>