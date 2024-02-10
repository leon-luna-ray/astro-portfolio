<script setup lang="ts">
import { computed } from 'vue';
import type { Language } from '../interfaces/Language';

const props = defineProps({
  data: {
    type: Array as () => Language[],
    required: true,
  },
});

const color = '#f1e05a';

const getFillStyle = (item: Language) => {
  return {
    width: `${item.value}%`,
    'background-color': item.color || color,
  };
};

const computedStyles = computed(() => {
  return props.data.map((item: Language) => ({
    title: item.title,
    fillStyle: getFillStyle(item),
    value: item.value,
  }));
});
</script>

<template>
  <ul v-if="data?.length" class="flex flex-col gap-y-[0.6rem]">
    <li v-for="item in computedStyles" :key="item.title" class="flex flex-col gap-y-[0.1rem]">
      <span>{{ item.title }}</span>
      <div class="grid grid-cols-6">
        <div class="col-span-5">
          <div :style="item.fillStyle" class="h-[15px] rounded-full border border-neutral-brown"></div>
        </div>
        <div class="col-span-1 leading-none pl-1">{{ item.value }}%</div>
      </div>
    </li>
  </ul>
</template>
