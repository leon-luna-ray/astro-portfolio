<template>
    <header id="header" :class="bottomPadding">
        <div class='top-label hover:text-inherit'>
            <div class='divider'></div>
            <div class="label-text">
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
                    <span v-if="!isHome" class="page-title">
                        {{ getTitle(path[path.length - 1]) }}
                    </span>
                </a>
                <div v-else-if="path.length" v-for="(item, index) in path" class="path flex">
                    <a v-if="index < path.length - 1" :href="path[index]" class="text-item">{{ getTitle(item) }}</a>
                    <span v-else class="text-item">{{ getTitle(item) }}</span>
                    <span v-if="index < path.length - 1" class="dash pl-2 hidden md:block" aria-hidden="true"> - </span>
                </div>
            </div>
            <div class='divider'></div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { useWindowScroll, useMediaQuery } from '@vueuse/core'

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