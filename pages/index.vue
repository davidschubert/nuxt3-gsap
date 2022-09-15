<template>
    <div>
        <strong>Homepage</strong>
        <nav>
            <ul>
                <li><NuxtLink to="/">Homepage</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                <li><NuxtLink to="/impressum">Impressum</NuxtLink></li>
                <li><NuxtLink to="/smooth">ScrollSmoother</NuxtLink></li>
            </ul>
        </nav>

        <header class="header">
            <h1 class="title">ScrollSmoother</h1>
            <button class="button">Jump to C</button>
        </header>
        <div class="box box-a" data-speed="0.5">a</div>
        <div class="box box-b" data-speed="0.8">b</div>
        <div class="box box-c" data-speed="1.5">c</div>
        <div class="line"></div>
    </div>
</template>

<script setup>
definePageMeta({
    title: "Homepage",
    layout: "page",
});

const { gsap, ScrollTrigger, ScrollSmoother, SplitText } = useGsap();

onMounted(() => {
    /*------------------------------
    Init the GSAP SmoothScroller
    ------------------------------*/
    const smoother = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: 1,
        normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
        ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
        effects: true,
        preventDefault: true,
    });

    /* Homepage */
    ScrollTrigger.create({
        trigger: ".box-c",
        pin: true,
        start: "center center",
        end: "+=300",
    });

    document.querySelector("button").addEventListener("click", (e) => {
        // scroll to the spot where .box-c is in the center.
        // parameters: element, smooth, position
        smoother.scrollTo(".box-c", true, "center center");

        // or you could animate the scrollTop:
        // gsap.to(smoother, {
        // 	scrollTop: smoother.offset(".box-c", "center center"),
        // 	duration: 1
        // });
    });
});
</script>

<style>
:root {
    --dark: #1d1d1d;
    --grey-dark: #414141;
    --light: #fff;
    --mid: #ededed;
    --grey: #989898;
    --gray: #989898;
    --green: #28a92b;
    --green-dark: #4e9815;
    --green-light: #6fb936;
    --blue: #2c7ad2;
    --purple: #8d3dae;
    --red: #c82736;
    --orange: #e77614;
    accent-color: var(--green);
}
body {
    background-color: #111;
    font-family: "Signika Negative", sans-serif, Arial;
    overscroll-behavior: none;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#wrapper {
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

#content {
    overflow: visible;
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
footer {
    position: fixed;
    right: 0px;
    bottom: 0px;
    padding: 6px 10px 10px 12px;
    border-top-left-radius: 26px;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
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
