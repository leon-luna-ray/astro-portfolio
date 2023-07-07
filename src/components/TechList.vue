<script setup lang="ts">
import { defineProps, ref, Ref, onMounted } from 'vue';

import IconChevronUp from './icons/IconChevronUp.vue'
import IconChevronDown from './icons/IconChevronDown.vue'
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

// State
const expandedItem: Ref<number | null> = ref(null);

// Methods
const setExpandedItem = (value: number | null): void => {
    if (expandedItem.value === value) {
        expandedItem.value = null;
    } else {
        expandedItem.value = value;
    }
};

onMounted(() => {
    setExpandedItem(0);
})
</script>
<template>
    <div class="tech-list">
        <h3 v-if="title" class="title">{{ title }}</h3>
        <ul class="link-list">
            <li v-for="(item, index) in items" class="hover:cursor-pointer">
                <div class="title" @click="setExpandedItem(index)">
                    <span>{{ item.title }}</span>
                    <IconChevronUp v-if="expandedItem === index" class="chevron up" />
                    <IconChevronDown v-else class="chevron down" />
                </div>
                <PortableText v-if="expandedItem === index" :data="item.description" class="description" />
            </li>
        </ul>
    </div>
</template>