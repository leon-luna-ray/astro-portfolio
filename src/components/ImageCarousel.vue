<script setup lang="ts">
const slideBgColor = (index: number) => {
  return index % 2 === 0 ? 'brown' : 'black';
}
</script>

<template>
    <div class='image-carousel'>
        <div :class="['slide', slideBgColor(0)]">
            <img src="../assets/img/sample2.jpg" alt="test img">
        </div>
        <div :class="['slide', slideBgColor(1)]">
            <img src="../assets/img/ruta1x1.jpg" alt="test img">
        </div>
        <div :class="['slide', slideBgColor(2)]">
            <img src="../assets/img/sample1.jpg" alt="test img">
        </div>
    </div>
</template>