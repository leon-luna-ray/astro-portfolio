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
    <div class="grid md:grid-cols-5 gap-x-[4rem] gap-y-[2rem] items-center">
        <div class='md:col-span-2 relative flex justify-center items-center aspect-square'>
            <div class="flex justify-center items-center aspect-square rounded-3xl p-[2rem] w-fit bg-black dark:bg-light-yellow/60">
                <slot />
            </div>
        </div>
        <div class='md:col-span-3 text-center md:text-left flex justify-center flex-col'>
            <span v-if="label" class='font-bold text-orange-900 dark:text-inherit'>{{ label }}</span>
            <h2 class="font-monoton text-[2rem] md:text-[3.125rem] pt-[1rem] md:pt-[2.5rem] dark:text-light-yellow/80 leading-[120%]">{{ text }}</h2>
        </div>
    </div>
</template>