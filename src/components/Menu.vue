<template>
    <div
        :class="[isVisible, 'fixed top-0 right-[-100vw] md:right-[-50vw] w-[100vw] md:w-[50vw] h-screen bg-theme z-10 transition-transform duration-300 ease-in-out']">
        <button @click="isMenuOpen.set(!$isMenuOpen)">X</button>
        <h1>Menu</h1>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isMenuOpen } from '../stores/menu';
import { useStore } from '@nanostores/vue';

const $isMenuOpen = useStore(isMenuOpen);

const isVisible = computed(() => ({
    'translate-x-[-50vw]': $isMenuOpen.value,
}))
</script>
