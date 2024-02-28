<script setup lang="ts">
import { computed } from 'vue';
import { getStatusIcon } from '../utils/utils'
import { getTimeSince } from '../utils/date'

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    lastCommit: {
        type: String,
        required: false,
    },
})

const statusIcon = (status: string): string => {
    if (status === 'live') {
        return '🟢';
    }
    if (status === 'development') {
        return '🚧'
    }
    if (status === 'bug' || status === 'down') {
        return '⛔️'
    }
    return '⚠️'
}

const projectStatusLabel = computed(() => {
    return `${getStatusIcon(props.data.status)} ${props.data.status}`;
})

const timeSinceUpdate = computed(() => {
    if (props.lastCommit) {
        return getTimeSince(props.lastCommit);
    }
    return null;
})
</script>

<template>
    <div class="info">
        <ul class="info-list">
            <li v-if="data.status">
                <span class="label">Status</span>
                <span class="value uppercase">{{ projectStatusLabel }}</span>
            </li>
            <li v-if="timeSinceUpdate">
                <span class="label">Updated</span>
                <span class="value">{{ timeSinceUpdate }}</span>
            </li>
            <li v-if="data.customUrl">
                <span class="label">URL</span>
                <a :href=data.customUrl class="value" target="_blank">{{ data.customUrl }}</a>
            </li>
            <li v-if="data.url">
                <span class="label">App Url</span>
                <a :href=data.url class="value" target="_blank">{{ data.url }}</a>
            </li>
            <li v-if="data.repository" class="order-last md:order-none">
                <span class="label">Code url</span>
                <a :href=data.repository class="value" target="_blank">{{ data.repository }}</a>
            </li>
        </ul>
    </div>
</template>