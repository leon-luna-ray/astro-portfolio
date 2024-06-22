<script setup lang="ts">
import IconClose from '../components/icons/IconClose.vue';

import type { Tag } from '../interfaces/Tag';

const props = defineProps({
    items: {
        type: Array as PropType<Tag[]>, // Specify that items is an array of Tag
        required: true,
    },
    activeItem: {
        type: String,
        required: false,
    },
});

const getHref = (slug: string) => {
    return slug === props.activeItem ? '/projects' : `/projects/technologies/${slug}`;
}
const getAriaLabel = (item: Tag) => { // Use Tag type for item
    if (props.activeItem === item.slug.current) {
        return `Click to view all projects`;
    }
    return `Click to view ${item.title} projects`;
}
</script>

<template>
    <section v-if="items.length" class="container pt-[2rem]">
        <div class="flex flex-wrap justify-center md:px-[2rem]">
            <a v-for="item in items" :key="item._id" :href="getHref(item.slug.current)"
                :class="[{ 'active': item.slug.current === activeItem }, 'filter-btn']"
                :aria-label="getAriaLabel(item)">
                <span>{{ item.title }}</span>
                <IconClose v-if="item.slug.current === activeItem" />
            </a>
        </div>
    </section>
</template>