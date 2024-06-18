<script setup lang="ts">
onMounted(() => {
    console.log("%c Enter layout Default", "background: #0000ff; color: #fff");
});

// Clean up when the layout is unmounted
onUnmounted(() => {
    console.log("%c Exit layout Default", "background: #0000ff; color: #fff");
});
</script>

<template>
    <div class="scroll-container">
        <div class="layout">Default layout</div>
        <slot />
        <PageFrame />
    </div>
</template>

<style scoped>
/* GSAP ScrollSmoother – Replace the default browser scrollbar with a custom one, if desired */
html {
    overflow: hidden;
}

body {
    overflow: hidden;
    height: 100%;
    position: relative;
}

/* GSAP ScrollSmoother – Make the scroll container take up the entire viewport */
.scroll-container {
    width: 100vw;
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
}

/* New */
.layout {
    background-color: transparent;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 2.5px;
    line-height: 9px;
    position: fixed;
    width: 100%;
}
</style>
