<script setup lang="ts">
import CardThumbnailLink from '../components/cards/CardThumbnailLink.vue'
const props = defineProps({
    data: {
        type: Array,
        required: true,
    }
})

</script>
<template>
    <ul class="thumbnail-links">
        <li v-for="item in data">
            <CardThumbnailLink :link="item"/>
        </li>
    </ul>
</template>