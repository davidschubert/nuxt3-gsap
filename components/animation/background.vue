<script setup>
/* gsap verfügbar machen */
const { gsap } = useGsap();

/* html content vars */
const gsapMittelpunkt = ref(null);
const gsapStar = ref(null);
let ctx = null;

onMounted(() => {
    ctx = gsap.context(() => {
        /* Animate with rotation the Star on scrolling in the background */
        gsap.set(gsapMittelpunkt.value, { xPercent: -50, yPercent: -50 });

        gsap.to(gsapMittelpunkt.value, {
            delay: 0.5,
            duration: 3,
            opacity: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                pin: false,
                scrub: 0.2,
                start: "top top",
                end: "+=8000",
                /*markers: {
                    startColor: "green",
                    endColor: "red",
                    fontSize: "12px",
                },*/
            },
        }).to(gsapStar.value, {
            rotation: 360 * 1,
            duration: 1,
            ease: "none",
        });
    });
});

onUnmounted(() => {
    ctx.revert();
});
</script>

<template>
    <div>
        <div ref="gsapMittelpunkt" class="mittelpunkt">
            <img
                data-img-star
                src="/img/star.png"
                alt="Star"
                width="500"
                height="500"
                class="star"
                ref="gsapStar"
            />
        </div>
    </div>
</template>

<style scoped>
.mittelpunkt {
    z-index: -1;
    opacity: 0;
    position: fixed;
    left: 50%;
    top: 50%;
    width: 500px;
    height: 500px;
}
</style>
