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
    <ul class="activity-log flex-col-05">
        <li v-for="item in items">
            <a :href="item.html_url" target="_blank" class="hover:text-neutral-brown grid grid-cols-6 gap-x-[2rem] no-underline hover:text-white">
                <p v-if="item.commit?.message" class="col-span-4 xl:col-span-5">{{ item.commit?.message }}</p>
                <span class="col-span-2 xl:col-span-1 flex justify-end">{{ formatDate(item.commit.author.date) }}</span>
            </a>
        </li>
    </ul>
</template>