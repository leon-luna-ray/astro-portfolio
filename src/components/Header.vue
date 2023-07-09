<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { useWindowScroll } from '@vueuse/core'

const props = defineProps({
    title: {
        type: String,
    },
    name: {
        type: String,
    },
    isHome: {
        type: Boolean,
    },
    path: {
        type: Array as () => Array<string>,
        required: true,
    },
});

// Composables
const { y } = useWindowScroll();

// State
const isSticky = ref(false);

// Computed
const bottomPadding = computed(() => ({
    'md:pb-[1rem]': isSticky.value,
}))


// Methods
const handleScroll = () => {
    if (y.value > 75) {
        isSticky.value = true;
    }
    else {
        isSticky.value = false;
    }
}
const getTitle = (path: string): string => {
    const elements = path.split('/');
    const lastElement = elements[elements.length - 1];
    if (lastElement === '') {
        // Todo refactor values
        return props.isHome ? 'Ray Luna - Developer Portfolio' : 'Ray Luna';
    }
    const title = lastElement.replace(/-/g, ' ');
    return title
}

// Watchers
watch(y, handleScroll)
</script>
<template>
    <header id="header" :class="bottomPadding">
        <div class='top-label hover:text-inherit'>
            <div class='divider'></div>
            <div class="label-text">
                <div v-if="path.length" v-for="(item, index) in path" class="path flex">
                    <a v-if="index < path.length - 1" :href="path[index]" class="text-item">{{ getTitle(item) }}</a>
                    <span v-else class="text-item">{{ getTitle(item) }}</span>
                    <span v-if="index < path.length - 1" class="dash pl-2 hidden md:block"> - </span>
                </div>
            </div>
            <div class='divider'></div>
        </div>
    </header>
</template>