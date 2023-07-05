<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})

const statusIcon = (status: string): string => {
    if (status === 'live') {
        return '🟢'
    }
    if (status === 'bug' || status === 'down') {
        return '⛔️'
    }
    return '🟡'
}

const projectStatusLabel = computed(() => {
    return `${statusIcon(props.data.status)} ${props.data.status}`;
})
</script>
<template>
    <div class="info">
        <h2 class="title">Details</h2>

        <ul class="info-list">
            <li v-if="data.status">
                <span class="label">Status</span>
                <span class="value uppercase">{{ projectStatusLabel }}</span>
            </li>
            <li v-if="data.url">
                <span class="label">URL</span>
                <a :href=data.url class="value" target="_blank">{{ data.url }}</a>
            </li>
            <li v-if="data.customUrl">
                <span class="label">Custom Url</span>
                <a :href=data.customUrl class="value" target="_blank">{{ data.customUrl }}</a>
            </li>
            <li v-if="data.repository">
                <span class="label">Code Repository</span>
                <a :href=data.repository class="value" target="_blank">{{ data.repository }}</a>
            </li>
        </ul>
    </div>
</template>