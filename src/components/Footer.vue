<script setup lang="ts">
const year = new Date().getFullYear();
</script>
<template>
    <footer id="site-footer">
        <div class="dev">This Page is in development</div>
        <div>&copy; {{ year }} Ray Luna</div>
    </footer>
</template>