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
    <div class="container grid md:grid-cols-2">

        <div class='relative flex justify-center items-center items-center aspect-square'>
            <div class="flex justify-center items-center aspect-square rounded-3xl p-[2rem] max-w-[460px] w-fit bg-black">
                <slot />
            </div>
        </div>
        <div class='text-center md:text-left flex justify-center flex-col'>
            <span v-if="label" class='font-semibold'>{{ label }}</span>
            <p class="font-monoton text-[2rem] md:text-[3.125rem] pt-[1rem] md:pt-[2.5rem]">{{ text }}</p>
        </div>
    </div>
</template>