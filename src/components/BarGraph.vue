<script setup lang="ts">
const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
})
</script>
<template>
    <ul v-if="data?.length" class="bar-graph">
        <li v-for="item in data">
            <span>{{ item.title }}</span>
            <span>{{ item.value }}%</span>
        </li>
    </ul>
</template>