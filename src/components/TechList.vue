<script setup lang="ts">
import { defineProps, ref } from 'vue';

import PortableText from '../components/PortableText.vue'

const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    items: {
        type: Array,
        required: true,
    },
});

const expandedItem = ref(null);

function toggleItem(item) {
    expandedItem.value = (expandedItem.value === item ? null : item);
}
console.log(props.items)
</script>
<template>
    <div class="tech-list">
        <h3 v-if="title" class="title">{{ title }}</h3>
        <ul class="link-list">
            <li v-for="item in items">
                <span>{{ item.title }}</span>
                <PortableText :data="item.description" class="description"/>
            </li>
        </ul>
    </div>
</template>x