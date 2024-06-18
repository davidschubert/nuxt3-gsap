<script setup>
/* gsap verfügbar machen */
const { gsap } = useGsap();

/* html content vars */
let ctx = null;

onMounted(() => {
    ctx = gsap.context(() => {
        // GIF Animation
        gsap.from(".giphy img", {
            scrollTrigger: {
                pin: true,
                scrub: true,
                trigger: ".giphy",
            },
            scale: 0.2,
            autoAlpha: 0,
            ease: "sine.out",
        });
    });
});

onBeforeRouteLeave(() => {
    ctx.revert();
});
</script>

<template>
    <div class="giphy">
        <img src="/giphy.webp" alt="Giphy" />
    </div>
</template>

<style lang="scss" scoped>
.giphy {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    border: 1px solid grey;
    background-color: bisque;
    will-change: transform;

    img {
        display: block;
        will-change: transform;
    }
}
</style>
