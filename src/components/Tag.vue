<script setup lang="ts">

const props = defineProps({
    tag: {
        type: Object,
        required: true,
    },
})
</script>
<template>
    <div class="tag">{{ tag.title }}</div>
</template>