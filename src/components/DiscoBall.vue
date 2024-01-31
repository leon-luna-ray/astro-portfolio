<template>
    <div class="tres-container">
        <TresCanvas>
            <TresPerspectiveCamera position="[0,0,5]"></TresPerspectiveCamera>
        </TresCanvas>
        <!-- <div>Ball goes here</div> -->
    </div>
</template>
<script setup>
import { TresCanvas } from '@tresjs/core';

</script>
<style scoped>
/* html, body {
  padding: 0;
  margin: 0;
  background-color: #f9c74f;
} */
.tres-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

#tres-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #000 0%, #000 100%);
}

.overlay-block {
    width: 33%;
    height: 40%;
    max-width: 30vh;
    max-height: 30vw;
}
</style>