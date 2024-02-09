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
    <a v-if="link?.slug" class="hover:zoom-hover transition ease-in-out duration-300 card thumbnail-link flex gap-x-[1rem] no-underline hover:text-neutral-brown" :href="`/projects/${link.slug.current}`">
        <div class="w-[150px] h-[150px] col-span-1 flex-shrink-0">
            <img :src="getThumbnailUrl(link.mainImage)" alt="" class="object-cover h-full w-full border border-neutral-brown rounded-xl">
        </div>
        <div class="link-info justify-between flex-col-1 w-full">
            <div class="flex-col-05 w-full">
                <div class="flex justify-between w-full">
                    <h3 class="font-semibold text-[1rem] font-archivo">{{ link.title }}</h3>
                    <div class="chevron-icon-sm flex justify-end">
                    </div>
                </div>
                <div class="line-clamp-4 text-[0.875rem]">{{ link.intro }}</div>
            </div>

            <div class="chevron-icon-sm flex justify-end">
                <IconChevronRight />
            </div>
        </div>
    </a>
</template>