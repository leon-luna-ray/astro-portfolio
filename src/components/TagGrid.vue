<script setup lang="ts">
import Tag from './Tag.vue'

const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    tags: {
        type: Array,
        required: true,
    },
})
</script>
<template>
    <div v-if="tags?.length" class="tag-grid">
        <h2 v-if="title" class="title">{{ title }}</h2>
        <div class="tag-grid flex flex-wrap gap-y-[0.75rem] gap-x-[0.5rem]">
            <Tag v-for="tag in tags" :tag="tag" />
        </div>
    </div>
</template>