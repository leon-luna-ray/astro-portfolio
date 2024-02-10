<script setup lang="ts">
import type { Tag } from '../interfaces/Tag'

const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    tags: {
        type: Array as () => Tag[],
        required: true,
    },
})
</script>
<template>
    <div v-if="tags?.length" class="tag-grid">
        <ul class="tag-grid flex flex-wrap gap-y-[0.75rem] gap-x-[0.5rem]">
            <li v-for="tag in tags" class="tag">{{ tag.title }}</li>
        </ul>
    </div>
</template>