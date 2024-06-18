<template>
    <div class="load-container">
        <div class="loading-screen"></div>
    </div>
</template>

<script setup>
// Transition
import gsap from "gsap";

definePageMeta({
    pageTransition: {
        name: "custom-flip",
        mode: "out-in",
        onBeforeEnter: (el) => {
            console.log("onBeforeEnter");

            gsap.set(el, {
                scale: 0.5,
                autoAlpha: 0,
            });
        },
        onEnter: (el, done) => {
            console.log("onEnter");

            gsap.to(el, {
                delay: 1,
                duration: 0.5,
                scale: 1,
                autoAlpha: 1,
                ease: "power2.out",
                onComplete: done,
            });
        },
        onAfterEnter: (el) => {
            console.log("onAfterEnter");
        },
        onLeave: (el, done) => {
            console.log("onLeave");

            const tl = gsap.timeline();

            tl.to(el, {
                duration: 1.2,
                width: "100%",
                left: "0%",
                ease: "Expo.easeInOut",
            });

            tl.to(el, {
                duration: 1,
                width: "100%",
                left: "100%",
                ease: "Expo.easeInOut",
                delay: 0.3,
            });

            tl.set(el, { left: "-100%", onComplete: done });

            /*gsap.to(el, {
                delay: 1,
                duration: 1.2,
                scale: 0.5,
                autoAlpha: 0,
                ease: "Expo.easeInOut",
                onComplete: done,
            });*/
        },
    },
});

/*function pageTransition() {
    const tl = gsap.timeline();

    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });

    tl.set(".loading-screen", { left: "-100%" });
}*/
</script>

<style scoped>
.loading-screen {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background-color: #4bedc2;
    width: 0%;
    height: 100%;
}

.load-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 10;
    pointer-events: none;
}
</style>
