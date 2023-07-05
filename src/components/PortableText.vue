<script setup lang="ts">
import { sanityPortableText } from '../lib/text';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },


})
</script>
<template>
    <div class="portable-text" v-html="sanityPortableText(data)"></div>
</template>