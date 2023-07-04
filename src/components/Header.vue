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
    }
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

// Watchers
watch(y, handleScroll)
</script>
<template>
    <header id="header" :class="bottomPadding">
        <a href="/" class='top-label'>
            <div class='divider'></div>
            <div class="label-text">
                <span class="name">{{ name }}</span>
                <span class="dash"> - </span>
                <span class="title">{{ title }}</span>
            </div>
            <div class='divider'></div>
        </a>
    </header>
</template>