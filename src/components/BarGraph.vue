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
  <ul v-if="data?.length" class="bar-graph">
    <li v-for="item in computedStyles" :key="item.title">
      <span>{{ item.title }}</span>
      <div class="value">
        <div class="bar">
          <div :style="item.fillStyle" class="fill"></div>
        </div>
        <div class="label">{{ item.value }}%</div>
      </div>
    </li>
  </ul>
</template>
