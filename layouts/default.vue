<script setup lang="ts">
    onMounted(() => {
        console.log(
            "%c Enter layout Default",
            "background: #0000ff; color: #fff"
        );
    });

    // Clean up when the layout is unmounted
    onUnmounted(() => {
        console.log(
            "%c Exit layout Default",
            "background: #0000ff; color: #fff"
        );
    });
</script>

<template>
    <div class="w-screen h-full overflow-y-scroll touch-pan-y relative">
        <div
            class="bg-transparent text-white text-center uppercase text-[9px] font-medium tracking-[2.5px] leading-[9px] fixed w-full"
        >
            Default layout
        </div>
        <slot />
        <PageFrame />
    </div>
</template>

<style scoped>
    /* GSAP ScrollSmoother – Replace the default browser scrollbar with a custom one, if desired */
    :root {
        @apply overflow-hidden;
    }

    body {
        @apply overflow-hidden h-full relative;
    }
</style>
