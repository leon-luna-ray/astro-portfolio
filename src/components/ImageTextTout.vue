<script setup lang="ts">

const props = defineProps({
    label: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <div class='overflow-hidden'>
        <div class="container grid md:grid-cols-2">
            <div class='text-center md:text-left flex justify-center flex-col'>
                <span v-if="label" class='font-semibold'>{{ label }}</span>
                <p class="font-monoton text-[2rem] md:text-[3.125rem] pt-[1rem] md:pt-[2.5rem]">{{ text }}</p>
            </div>
            <div class='hidden md:flex relative justify-end items-center h-[98%] aspect-square overflow-hidden'>
                <!-- <img src="/img/spinner.png" alt="decoration"> -->
                <!-- <DiscoBall client:load /> -->
                <slot/>
            </div>
        </div>
    </div>
</template>