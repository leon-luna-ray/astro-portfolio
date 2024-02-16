<template>
    <div class="absolute right-[4rem] bg-theme px-[1rem] hover:cursor-pointer hidden md:block dark:text-light-yellow" @click="toggleDarkMode">I/O</div>
</template>

<script setup>
const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}
</script>