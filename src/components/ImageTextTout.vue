<template>
    <div class="grid md:grid-cols-5 gap-x-[4rem] gap-y-[2rem] items-center">
        <div class='md:col-span-2 relative flex justify-center items-center aspect-square'>
            <div class="flex justify-center items-center aspect-square rounded-3xl p-[2rem] w-fit bg-black">
                <slot />
            </div>
        </div>
        <div class='md:col-span-3 text-center md:text-left flex justify-center flex-col'>
            <span v-if="label" class='font-bold text-orange-900 dark:text-inherit'>{{ label }}</span>
            <h2 class="font-monoton text-[2rem] md:text-[3.125rem] pt-[1rem] md:pt-[2.5rem] text-yellow-900">{{ text }}</h2>
        </div>
    </div>
</template>
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