<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { useWindowScroll, useMediaQuery } from '@vueuse/core'

const props = defineProps({
    title: {
        type: String,
    },
    name: {
        type: String,
    },
});

// Composables
const { y } = useWindowScroll();
const isMobile = useMediaQuery('(max-width: 640px)')
// State
const isSticky = ref(false);

// Computed
const isNameHidden = computed(() => {
    if (isMobile.value) {
        return y.value > 130;
    }
    return y.value > 250;
})
const bottomPadding = computed(() => ({
    'md:pb-[1rem]': isSticky.value,
}))
const labelText = computed(() => {
    return isNameHidden.value ? `${props.name} | ${props.title}` : props.title;
})

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
        <div class='top-label'>
            <div class='divider'></div>
            <span>{{ labelText }}</span>
            <div class='divider'></div>
        </div>
    </header>
</template>