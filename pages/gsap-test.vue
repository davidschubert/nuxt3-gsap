<script setup>
// SEO and Meta
useHead({
    title: "ScrollSmoother Test | David Schubert – UI/UX Designer",
    meta: [{ name: "description", content: "My amazing imprint." }],
});

const { gsap, ScrollTrigger, ScrollSmoother } = useGsap();

let ctx = null;
let smoother = null;

const scrollTo = () => {
    smoother.scrollTo(".box-c", true, "center center");
};

onMounted(() => {
    ctx = gsap.context(() => {
        // create the smooth scroller FIRST!
        smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1,
            effects: true,
            smoothTouch: 0,
        });

        ScrollTrigger.create({
            trigger: ".box-c",
            pin: true,
            start: "center center",
            end: "+=300",
            markers: {
                startColor: "green",
                endColor: "red",
                fontSize: "12px",
            },
        });

        ScrollTrigger.refresh();
    });

    console.log("%c Enter Index", "background: #000; color: #fff");
});

onUnmounted(() => {
    //ScrollTrigger.getAll().forEach((t) => t.kill());
    smoother.scrollTo(0);
    smoother.kill();
    ctx.revert();

    console.log("%c Exit Index", "background: #000; color: #fff");
});
</script>

<template>
    <main id="smooth-wrapper">
        <div id="smooth-content" style="padding-top: 8rem">
            <header class="header">
                <h1 class="title">GreenSock ScrollSmoother on a Nuxt3 App</h1>
                <button class="button" @click="scrollTo">Jump to C</button>
            </header>
            <div class="box box-a" data-speed="0.5">a</div>
            <div class="box box-b" data-speed="0.8">b</div>
            <div class="box box-c" data-speed="1.5">c</div>
            <div class="box box-d" data-speed="1.0">d</div>
            <div class="line"></div>
        </div>
    </main>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#smooth-wrapper {
    overflow-x: hidden;
}

#smooth-content {
    overflow: visible;
    overflow-x: hidden;
    width: 100%;
    /* set a height because the contents are position: absolute, thus natively there's no height */
    height: 4000px;

    background-image: linear-gradient(
            rgba(255, 255, 255, 0.07) 2px,
            transparent 2px
        ),
        linear-gradient(90deg, rgba(255, 255, 255, 0.07) 2px, transparent 2px),
        linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

button {
    position: relative;
}

.box {
    width: 100px;
    height: 100px;
    background-color: #28a92b;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    line-height: 100px;
    font-size: 50px;
    text-align: center;
    will-change: transform;
}

.box.active {
    background-color: red;
}

.box-a {
    top: 200px;
    background-color: #8d3dae;
}

.box-b {
    top: 600px;
}

.box-c {
    top: 1000px;
    background-color: #e26c16;
}

.box-d {
    top: 1400px;
    background-color: #00ff00;
}

.line {
    visibility: hidden;
    width: 2px;
    height: 4000px;
    position: absolute;
    left: 400px;
    top: 0px;
    background-color: #777;
}

header .name {
    color: white;
}

.title {
    text-align: center;
    color: white;
    font-weight: 400;
    font-size: 40px;
}

.end {
    position: absolute;
    /*   bottom: 0; */
    top: 2400px;
    transform: translateY(-100%);
    font-size: 30px;
    color: white;
}

/* button:not('.box') { breaking for some reason in codepen? */
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

.light button {
    color: var(--light);
    background-image: linear-gradient(to bottom, #575757, #414141);
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
</style>
