<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
const expandedItem = ref<number | null>(null);

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
    <div class="tech-list flex-col-2">
        <ul class="link-list font-bold flex-col-1">
            <li v-for="(item, index) in items" class="hover:cursor-pointer flex-col-1">
                <div class="flex justify-between pb-0 items-center text-[1rem]" @click="setExpandedItem(index)">
                    <span>{{ item.title }}</span>
                    <IconChevronUp v-if="expandedItem === index" class="h-[1rem] up" aria-hidden="true"/>
                    <IconChevronDown v-else class="h-[1rem] down" aria-hidden="true"/>
                </div>
                <p v-if="expandedItem === index" class="text-[0.875rem] font-light" @click="setExpandedItem(null)">{{ item.description }}
                </p>
            </li>
        </ul>
    </div>
</template>
