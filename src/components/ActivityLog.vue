<script setup lang="ts">
import { formatDate } from '../utils/date'

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
});
</script>
<template>
    <ul class="activity-log">
        <li v-for="item in items">
            <a :href="item.html_url" target="_blank" class="hover:text-neutral-brown">
                <p v-if="item.commit?.message" class="message">{{ item.commit?.message }}</p>
                <span class="date">{{ formatDate(item.commit.author.date) }}</span>
            </a>
        </li>
    </ul>
</template>