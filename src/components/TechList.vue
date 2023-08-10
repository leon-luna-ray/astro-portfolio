<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';

import IconChevronUp from './icons/IconChevronUp.vue'
import IconChevronDown from './icons/IconChevronDown.vue'

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    isOpen: {
        type: Boolean,
        required: false,
    }
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
    if (props.isOpen) {
        setExpandedItem(0)
    }
});
</script>
<template>
    <div class="tech-list">
        <ul class="link-list">
            <li v-for="(item, index) in items" class="hover:cursor-pointer">
                <div class="title" @click="setExpandedItem(index)">
                    <span>{{ item.title }}</span>
                    <IconChevronUp v-if="expandedItem === index" class="chevron up" />
                    <IconChevronDown v-else class="chevron down" />
                </div>
                <p v-if="expandedItem === index" class="description" @click="setExpandedItem(null)">{{ item.description }}
                </p>
            </li>
        </ul>
    </div>
</template>