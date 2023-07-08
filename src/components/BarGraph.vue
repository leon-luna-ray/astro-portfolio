<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
})
console.log(props.data)
</script>
<template>
    <div v-if="data?.length" class="bar-graph">
        <h2 class="title">
            Languages
        </h2>
    </div>
</template>