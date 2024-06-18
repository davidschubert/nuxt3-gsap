<script setup>
const { gsap, ScrollTrigger, ScrollSmoother } = useGsap();

let ctx = null;
let scroller = null;

onMounted(() => {
    ctx = gsap.context(() => {
        scroller = ScrollSmoother.create({
            wrapper: "#__wrapper",
            content: "#__content",
            smooth: 1,
            effects: true,
            smoothTouch: 0.1,
            ignoreMobileResize: true,
            normalizeScroll: true,
        });

        ScrollTrigger.refresh();
    });

    console.log(
        "%c Enter layout ScrollSmoother",
        "background: #0000ff; color: #fff"
    );
});

// Clean up when the layout is unmounted
onUnmounted(() => {
    ScrollTrigger.refresh();
    scroller.scrollTo(0);
    scroller.kill();
    ctx.revert();

    console.log(
        "%c Exit layout ScrollSmoother",
        "background: #0000ff; color: #fff"
    );
});
</script>

<template>
    <div class="scroll-container">
        <div class="layout">ScrollSmoother layout</div>
        <div id="__wrapper">
            <div id="__content">
                <slot />
            </div>
        </div>
        <PageFrame />
        <AnimationBackground />
    </div>
</template>

<style scoped>
/* Replace the default browser scrollbar with a custom one, if desired */
html {
    overflow: hidden;
}

body {
    overflow: hidden;
    height: 100%;
    position: relative;
}

/* Make the scroll container take up the entire viewport */
.scroll-container {
    width: 100vw;
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
}

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
