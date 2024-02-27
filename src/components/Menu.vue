<template>
    <aside :class="[isVisible, 'fixed top-0 right-[-100vw] md:right-[-25vw] w-[100vw] md:w-[25vw] h-screen bg-theme z-10 transition-transform duration-300 ease-in-out border-red']">
        <div class="p-[2rem] relative">
            <button @click="isMenuOpen.set(!$isMenuOpen)" class="absolute top-5 right-5">
                <IconClose />
            </button>
            <nav class="text-center">
                <h1>Menu</h1>
                <ul class="menu-links flex flex-col gap-y-4 mt-10">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isMenuOpen } from '../stores/menu';
import { useStore } from '@nanostores/vue';
import IconClose from '../components/icons/IconClose.vue'

// State
const $isMenuOpen = useStore(isMenuOpen);

// Computed
const isVisible = computed(() => ({
    'translate-x-[-100vw] md:translate-x-[-25vw]': $isMenuOpen.value,
}))
</script>
