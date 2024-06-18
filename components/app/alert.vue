<script setup>
/* gsap verfügbar machen */
const { gsap } = useGsap();

/* html content vars */
const myElement = ref(null);
const box = ref(null);
let ctx = null;

onMounted(() => {
    // define a gsap timeline
    const tlBox = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" },
    });

    ctx = gsap.context(() => {
        // text animation
        gsap.to(myElement.value, { duration: 1, x: 100, ease: "power2.inOut" });

        // start timeline animation
        tlBox
            .to(box.value, {
                x: 600,
                y: 200,
                backgroundColor: "red",
                borderRadius: "100%",
            })
            .to(box.value, {
                x: 0,
                y: 0,
                backgroundColor: "green",
                borderRadius: "0%",
            });
    });
});

onBeforeUnmount(() => {
    ctx.revert();
});
</script>

<template>
    <div ref="myElement" class="my-element">
        <h2><slot /></h2>
        <div ref="box" class="alert-box"></div>
    </div>
</template>

<style scoped>
.my-element {
    background-color: red;
}
.alert-box {
    width: 100px;
    height: 100px;
    background-color: blue;
    position: absolute;
}
</style>
