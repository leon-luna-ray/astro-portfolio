<script setup lang="ts">
import IconChevronRight from '../icons/IconChevronRight.vue'
import { getThumbnailUrl } from '../../lib/images'
const props = defineProps({
    link: {
        type: Object,
        required: true,
    }
})
</script>
<template>
    <a v-if="link?.slug" class="card thumbnail-link" :href="`/projects/${link.slug.current}`">
        <div class="img-wrap">
            <img :src="getThumbnailUrl(link.mainImage)" alt="">
        </div>
        <div class="link-info">
            <div class="text">
                <div class="title-section">
                    <span class="project-title">{{ link.title }}</span>
                    <div class="icon">
                    </div>
                </div>
                <div class="intro">{{ link.intro }}</div>
            </div>

            <div class="icon">
                <IconChevronRight />
            </div>
        </div>
    </a>
</template>