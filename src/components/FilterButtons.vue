<script setup lang="ts">
const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    activeItem: {
        type: String,
        required: false,
    },
});

const getHref = (slug: string) => {
    return slug === props.activeItem ? '/projects' : `/projects/tech/${slug}`;
}

console.log('😃', props.activeItem)
</script>

<template>
    <div v-if="items.length" class="container flex flex-wrap justify-center">
        <a v-for="item in items" :key="item._id" :href="getHref(item.slug.current)"
            :class="[{ 'active': item.slug.current === activeItem }, 'filter-btn']">
            {{ item.title }}
        </a>
    </div>
</template>