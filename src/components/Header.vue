<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { useWindowScroll, useMediaQuery } from '@vueuse/core'
import { useStore } from '@nanostores/vue';
import { isMenuOpen } from '../stores/menu';
import IconHamburger from '../components/icons/IconHumburger.vue';
import IconChevronLeft from '../components/icons/IconChevronLeft.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Developer Portfolio',
    },
    name: {
        type: String,
        default: 'Ray Luna',
    },
    isHome: {
        type: Boolean,
    },
    path: {
        type: Array as () => Array<string>,
        required: true,
    },
});

// State
const { y } = useWindowScroll();
const isMobile = useMediaQuery('(max-width: 640px)')
const isSticky = ref(false);
const $isMenuOpen = useStore(isMenuOpen);

// Computed
const bottomPadding = computed(() => ({
    'md:pb-[0.05rem]': isSticky.value,
}))
const parentPage = computed(() => {
    const pathLength = props.path.length;
    if (pathLength < 2) {
        return null;
    }
    return props.path[pathLength - 2];
});


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
    <header id="header" :class="['sticky top-0 md:top-[1rem] bg-theme z-[2]', bottomPadding]">
        <div
            class='top-label container flex items-center justify-center border-t border-b border-black dark:border-light-yellow/80 md:border-none relative'>
            <div class='divider'></div>
            <div class="px-4 py-[1rem] md:py-0 flex justify-center gap-x-[0.5rem]">
                <a v-if="isMobile && path.length" href="/" class="mobile">
                    <div class="site">
                        <div v-if="path.length > 1" class="inner">
                            <span>{{ name }}</span>
                            <span aria-hidden="true">-</span>
                            <span>{{ title }}</span>
                        </div>
                        <div v-else class="inner home">
                            <span>{{ name }}</span>
                            <span>{{ title }}</span>
                        </div>
                    </div>
                    <span v-if="!isHome && path.length > 1" class="page-title">
                        {{ getTitle(path[path.length - 1]) }}
                    </span>
                </a>
                <div v-else-if="path.length" v-for="(item, index) in path" class="path flex">
                    <a v-if="index < path.length - 1" :href="path[index]" class="text-item">{{ getTitle(item) }}</a>
                    <a v-else-if="path.length === 1" href="/" class="text-item">{{ getTitle(item) }}</a>
                    <span v-else class="text-item">{{ getTitle(item) }}</span>
                    <span v-if="index < path.length - 1" class="pl-2 hidden md:block" aria-hidden="true"> - </span>
                </div>
            </div>
            <div class='divider'></div>
            <!-- Menu Btn -->
            <div class="absolute z-10 right-0 md:right-[1.5rem] lg:right-[3rem] bg-theme p-[1rem]">
                <IconHamburger class="hover:cursor-pointer" @click="isMenuOpen.set(!$isMenuOpen)" />
            </div>
        </div>
        <div v-if="parentPage"
            class="stickty top-0 container flex items-center gap-x-[0.25rem] pb-[1rem] title-text-theme">
            <IconChevronLeft class="h-[1.25rem]" />
            <a :href="parentPage" class="uppercase font-[600] no-underline hover:underline">Back</a>
        </div>
    </header>
</template>
