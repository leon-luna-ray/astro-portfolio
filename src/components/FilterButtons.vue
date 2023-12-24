<template>
    <div v-if="items.length" class="container flex flex-wrap">
        <div v-for="item in items" class="rounded-lg border border-neutral-brown px-[1rem] py-[0.2rem] m-[0.2rem]">{{ item.title }}</div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    items: {
        type: Array,
        required: true,
    }
})
</script>