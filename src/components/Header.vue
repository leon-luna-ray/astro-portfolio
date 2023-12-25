<template>
    <header id="header" :class="['dark:text-primary-yellow',bottomPadding]">
        <div class='     hover:text-inherit'>
            <div class='flex-grow bg-black h-[2px] hidden md:block'></div>
            <div class="px-4 py-[1rem] md:py-0 flex justify-center gap-x-[0.5rem]">
                <a v-if="isMobile && path.length" href="/" class="text-center font-semibold hover:text-white">
                    <div class="site">
                        <!-- Todo refactor hard coded values -->
                        <div v-if="path.length > 1" class="inner">
                            <span>Ray Luna</span>
                            <span>-</span>
                            <span>Developer Portfolio</span>
                        </div>
                        <div v-else class="flex gap-x-[0.3rem] flex-col">
                            <span>Ray Luna</span>
                            <span>Developer Portfolio</span>
                        </div>
                    </div>
                    <span v-if="!isHome" class="capitalize">
                        {{ getTitle(path[path.length - 1]) }}
                    </span>
                </a>
                <div v-else-if="path.length" v-for="(item, index) in path" class="flex">
                    <a v-if="index < path.length - 1" :href="path[index]" class="text-center font-bold text capitalize">{{
                        getTitle(item) }}</a>
                    <span v-else class="text-center font-bold text capitalize">{{ getTitle(item) }}</span>
                    <span v-if="index < path.length - 1" class="hidden md:block pl-2 hidden md:block"> - </span>
                </div>
            </div>
            <div class='divider'></div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { useWindowScroll, useMediaQuery } from '@vueuse/core';

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
const isMobile = useMediaQuery('(max-width: 640px)')
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
