<script setup>
// SEO and Meta
useHead({
    title: "Toggle Boxes | David Schubert – UI/UX Designer",
    meta: [{ name: "description", content: "My amazing boxes." }],
});

const { gsap } = useGsap();
let ctx = null;
let scope = ref(null);
const tl = ref(null);

const toggleTimeline = () => {
    tl.value.reversed(!tl.value.reversed());
};

onMounted(() => {
    ctx = gsap.context((self) => {
        const boxes = self.selector(".box");
        tl.value = gsap
            .timeline()
            .to(boxes[0], { x: 120, rotation: 360 })
            .to(boxes[1], { x: -120, rotation: -360 }, "<")
            .to(boxes[2], { y: -166 })
            .reverse();
    }, scope.value);
});

onUnmounted(() => {
    ctx.revert();
});
</script>

<template>
    <section class="boxes-container" ref="scope">
        <h1>Use the button to toggle the Timeline</h1>
        <div>
            <button @click="toggleTimeline">Toggle Timeline</button>
        </div>
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </section>
</template>

<style scoped>
button {
    display: inline-block;
    outline: none;
    border: none;
    padding: 8px 14px;
    background: var(--light);
    background-image: linear-gradient(
        to bottom,
        hsl(0deg 0% 100%),
        hsl(0deg 0% 94%)
    );
    -webkit-box-shadow: 0px 1px 0px #414141;
    -moz-box-shadow: 0px 1px 0px #414141;
    box-shadow: 0px 1px 0px #414141;
    color: var(--dark);
    text-decoration: none;
    -webkit-border-radius: 4;
    -moz-border-radius: 4;
    border-radius: 4px;
    padding: 12px 25px;
    font-family: "Signika Negative", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    line-height: 18px;
}

button:hover {
    background: var(--green-light);
    background-image: linear-gradient(to bottom, #57a818, #4d9916);
    -webkit-box-shadow: 0px 1px 0px fefefe;
    -moz-box-shadow: 0px 1px 0px fefefe;
    box-shadow: 0px 1px 0px fefefe;
    color: #ffffff;
    text-decoration: none;
}

.boxes-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--ds-grey);
}

.box {
    background-color: var(--green);
    width: 100px;
    height: 100px;
    border-radius: 10px;
    font-size: 24px;
    text-align: center;
    line-height: 100px;
}
</style>
