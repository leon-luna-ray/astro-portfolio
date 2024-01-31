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
    <div class='image-text-tout'>
        <div class="inner">
            <div class='text'>
                <span v-if="label" class='label'>{{ label }}</span>
                <p>{{ text }}</p>
            </div>
            <div class='img-wrap'>
                <!-- <img src="/img/spinner.png" alt="decoration"> -->
                <!-- <DiscoBall client:load /> -->
                <slot/>
            </div>
        </div>
    </div>
</template>