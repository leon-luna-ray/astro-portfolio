<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    items: {
        type: Array,
        required: true,
    },
})
</script>
<template>
    <div class="tech-list">
        <h3 v-if="title" class="title">{{ title }}</h3>
        <ul class="link-list">
            <li v-for="item in items">{{ item.title }}</li>
        </ul>
    </div>
</template>