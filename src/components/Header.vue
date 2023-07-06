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
        type: Array,
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

const backText = computed(()=>{
    return '< Back'
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
        <a href="/" class='top-label hover:text-inherit'>
            <div class='divider'></div>
            <div class="label-text">
                <span class="name">{{ name }}</span>
                <span class="dash"> - </span>
                <div v-if="path?.length" v-for="(item, index) in path" class="path flex">
                    <span class="capitalize">{{ item }}</span>
                    <span v-if="index < path.length - 1" class="dash pl-2 hidden md:block"> - </span>
                </div>
            </div>
            <div class='divider'></div>
        </a>
    </header>
</template>