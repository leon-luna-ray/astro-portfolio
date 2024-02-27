<template>
    <div v-if="$isMenuOpen" class="bg-red-300 fixed top-0 right-0 h-screen z-10">
        <h1>Menu</h1>
        <h2 @click="isMenuOpen.set(!$isMenuOpen)">X</h2>
    </div>
</template>

<script setup lang="ts">
import { isMenuOpen } from '../stores/menu';
import { useStore } from '@nanostores/vue';

const $isMenuOpen = useStore(isMenuOpen);
</script>