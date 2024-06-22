<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Technology } from '../interfaces/Technology';
import IconChevronUp from './icons/IconChevronUp.vue'
import IconChevronDown from './icons/IconChevronDown.vue'
import IconChevronRight from './icons/IconChevronRight.vue';

const props = defineProps({
    items: {
        type: Array as () => Technology[],
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
                    <IconChevronUp v-if="expandedItem === index" class="h-[1rem] up" aria-hidden="true" />
                    <IconChevronDown v-else class="h-[1rem] down" aria-hidden="true" />
                </div>
                <div v-if="expandedItem === index" class="text-[0.875rem] font-light flex-col-1">
                    <p @click="setExpandedItem(null)">{{ item.description }}</p>
                    <a :href="`/projects/technologies/${item.slug.current}`"
                        class="text-[0.75rem] text-chocolate dark:text-beige uppercase font-[500] hover:underline flex gap-[0.5rem] items-center tracking-[0.01rem]">
                        <span>{{ item.title }} Projects </span>
                        <IconChevronRight class="h-[1rem]" />
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>
