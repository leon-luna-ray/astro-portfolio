<template>
    <div v-if="items.length" class="container flex flex-wrap justify-center">
      <div
        v-for="item in items"
        :key="item.id"
        class="rounded-lg border border-neutral-brown px-[1rem] py-[0.2rem] m-[0.2rem] hover:cursor-pointer hover:bg-neutral-brown hover:text-primary-yellow"
        :class="isSelected(item.slug.current)"
        @click="handleItemClick(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, ref, watch, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    query: {
      type: String,
      required: false,
    },
  });
  
  const techQuery = ref<string | null>(null);
  
  const isSelected = (slug: string) => {
    return techQuery.value && techQuery.value === slug ? 'bg-neutral-brown text-primary-yellow' : '';
  };
  
  const handleItemClick = (item) => {
    const queryParams = new URLSearchParams(window.location.search);
  
    // If the clicked item is already selected
    if (techQuery.value === item.slug.current) {
      techQuery.value = null;
      queryParams.delete('tech');
    } else {
      techQuery.value = item.slug.current;
      queryParams.set('tech', item.slug.current);
    }
  
    window.history.replaceState({}, '', `${window.location.pathname}?${queryParams}`);
  };
  
  onMounted(() => {
    if (props.query) {
      const queryParams = new URLSearchParams(props.query);
      const techParam = queryParams.get('tech');
  
      if (techParam) {
        techQuery.value = techParam;
      }
    }
  });
  </script>
  