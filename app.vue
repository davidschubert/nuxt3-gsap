<script setup>
const { gsap, ScrollTrigger, ScrollSmoother, SplitText } =
    useGsap();

onMounted(() => {
    // Move the box 600px on x-axis to the right
    gsap.to(".box", {
        x: 600,
    });

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: 1,
        normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
        ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
        effects: true,
        preventDefault: true,
    });

    // set the headline
    gsap.set(".heading", {
        yPercent: -150,
        opacity: 1,
    });

    let tl = gsap.timeline();
    let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
    let chars = mySplitText.chars;

    chars.forEach((char, i) => {
        smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
    });
});
</script>

<template>
    <div id="wrapper">
        <section id="content">
            <div class="box green"></div>
            <!-- smooth scrolling biz goes in here -->
            <div class="heading" aria-hidden="true">
                <p>smooooth</p>
                <div class="text-container">
                    <p>scrolling</p>
                    <p data-speed="0.95">scrolling</p>
                    <p data-speed="0.9">scrolling</p>
                    <p data-speed="0.85">scrolling</p>
                    <p data-speed="0.8">scrolling</p>
                    <p data-speed="0.75">scrolling</p>
                    <p data-speed="0.7">scrolling</p>
                </div>
            </div>

            <section class="image-grid container">
                <div class="image_cont" data-speed="1">
                    <img
                        data-speed="auto"
                        src="https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                        alt=""
                    />
                </div>
                <div class="image_cont" data-speed="1.7">
                    <img
                        data-speed="auto"
                        src="https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                        alt=""
                    />
                </div>
                <div class="image_cont" data-speed="1.5">
                    <img
                        data-speed="auto"
                        src="https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                        alt=""
                    />
                </div>
            </section>

            <section class="title container flow--lg">
                <h1>
                    <span class="eyebrow" aria-hidden="true">with </span>GSAP
                    scrollsmoother
                </h1>
                <p>
                    Seamlessly integrated with GSAP and ScrollTrigger.
                    Leveraging native scrolling - no "fake" scrollbars or event
                    hijacking.
                </p>
            </section>

            <section class="bars container">
                <div class="bars-text">
                    <div class="flow content">
                        <h2>Speed Control</h2>
                        <p>
                            Animate elements along at different speeds, slow
                            them down or make them whizz past.
                        </p>
                    </div>
                </div>

                <div class="bars-cont">
                    <div class="bar" data-speed="0.8">
                        <p>0.8</p>
                    </div>

                    <div class="bar" data-speed="0.9">
                        <p>0.9</p>
                    </div>

                    <div class="bar" data-speed="1">
                        <p>1</p>
                    </div>

                    <div class="bar" data-speed="1.1">
                        <p>1.1</p>
                    </div>

                    <div class="bar" data-speed="1.2">
                        <p>1.2</p>
                    </div>
                </div>
            </section>

            <section class="v-center">
                <div class="parallax-slab">
                    <img
                        data-speed="auto"
                        src="https://assets.codepen.io/756881/smoothscroller-1.jpg"
                        alt=""
                    />
                </div>
            </section>

            <section class="staggered container">
                <div class="staggered_text">
                    <div class="flow content">
                        <h2>Add some lag (the good kind!)</h2>
                        <p>
                            loosen the connection to the scroll to give a
                            feeling of 'follow through.'
                        </p>
                    </div>
                </div>

                <div class="staggered_demo">
                    <h3 id="split-stagger">stagger...</h3>
                </div>
            </section>

            <section class="parallax-images container">
                <div class="parallax-text">
                    <div class="flow content">
                        <h2>Easy parallax image effects</h2>
                        <p>
                            Pop your images in a container with overflow hidden,
                            size them a little larger than the container and set
                            data-speed to auto. GSAP does the rest.
                        </p>
                    </div>
                </div>

                <div class="image_cont">
                    <img
                        data-speed="auto"
                        src="https://assets.codepen.io/756881/neon3.jpg"
                        alt=""
                    />
                </div>
                <div class="image_cont">
                    <img
                        data-speed="auto"
                        src="https://assets.codepen.io/756881/neon2.jpg"
                        alt=""
                    />
                </div>
            </section>

            <section class="spacer"></section>
        </section>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap");
@font-face {
    font-family: "wild_worldbold";
    src: url("https://assets.codepen.io/756881/wild_world-webfont.woff2")
            format("woff2"),
        url("https://assets.codepen.io/756881/wild_world-webfont.woff")
            format("woff");
    font-weight: normal;
    font-style: normal;
}

.box {
    width: 60px;
    height: 60px;
    display: block;
}
.green {
    background-color: #00ff00;
}

:root {
    --fluid-min-width: 320;
    --fluid-max-width: 1140;
    --fluid-screen: 100vw;
    --fluid-bp: calc(
        (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
            (var(--fluid-max-width) - var(--fluid-min-width))
    );
}

@media screen and (min-width: 1140px) {
    :root {
        --fluid-screen: calc(var(--fluid-max-width) * 1px);
    }
}

:root {
    --f-0-min: 18;
    --f-0-max: 20;
    --step-0: calc(
        ((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
            var(--fluid-bp)
    );
    --f-1-min: 20;
    --f-1-max: 24;
    --step-1: calc(
        ((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
            var(--fluid-bp)
    );
}

* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    background: #111;
    font-family: "Open Sans", sans-serif;
    color: white;
    overscroll-behavior: none;
    margin: 0;
    padding: 0;
    font-weight: 300;
    overflow-x: hidden;
    font-size: var(--step-0);
}

section {
    min-height: 100vh;
}

p {
    line-height: 1.35;
}

#content {
    padding: 0 0.75rem;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 0.5rem;
}

h1,
h2,
h3,
h4,
p {
    margin: 0;
}

.flow--lg > * + * {
    margin-top: 2em;
}

.flow > * + * {
    margin-top: 1em;
}

.title {
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 50vh;
}

#content {
    overflow: visible;
    width: 100%;
}

.heading {
    position: absolute;
    top: 50vh;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 0;
}

h1 {
    font-size: clamp(12px, 8vw, 100px);
    text-align: center;
    line-height: 0.67;
    margin: 0 auto;
    font-family: "wild_worldbold";
}

h1 .eyebrow {
    font-family: "Open sans", sans-serif;
    font-size: clamp(12px, 3vw, 40px);
    font-weight: 400;
}

.heading p {
    font-family: "wild_worldbold";
    font-size: 15.5vw;
    font-size: clamp(12px, 15.5vw, 250px);
    text-align: center;
    line-height: 0.67;
    margin: 0;
    text-align: center;
    color: #111;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: white;
    z-index: -10;
}

.intro,
h2,
h3 {
    font-size: var(--step-1);
    font-weight: 500;
}

.text-container {
    position: relative;
}

.text-container p {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    color: transparent;
}

.text-container p:first-child {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    color: white;
}

.image-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0.2rem;
    grid-row-gap: 0.2rem;
    width: 70vw;
    margin: 0 auto;
    padding-top: 40vh;
    z-index: -1;
}

.image-grid .image_cont {
    position: relative;
    aspect-ratio: 1/1;
    overflow: hidden;
}

.image-grid img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 150%;
    -o-object-fit: cover;
    object-fit: cover;
}

.image-grid .image_cont:nth-child(1) {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 1;
    grid-row: 1;
}

.image-grid .image_cont:nth-child(2) {
    -ms-grid-column: 3;
    grid-column: 3;
    -ms-grid-row: 2;
    grid-row: 2;
}

.image-grid .image_cont:nth-child(3) {
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 3;
    grid-row: 3;
}

.parallax-images {
    margin-top: 10vh;
    padding: 10rem 1rem;

    display: grid;

    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 20vh;
    -webkit-box-align: center;

    align-items: center;
    justify-items: center;
}

.parallax-images .image_cont {
    position: relative;
    height: 80vh;
    overflow: hidden;
}

.parallax-images img {
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    height: 140%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.parallax-images .parallax-text {
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 1;
    grid-row: 1;
}

.parallax-images .image_cont:nth-child(2) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1 / span 1;
    -ms-grid-row: 1;
    grid-row: 1;
    width: 100%;
}

.parallax-images .image_cont:nth-child(3) {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2 / span 1;
    -ms-grid-row: 2;
    grid-row: 2;
}

.spacer {
    min-height: 50vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.stagger {
    font-size: 8vw;
}

.bars {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-column-gap: 4rem;
    column-gap: 4rem;
}

.bars .bars-text {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 300px;
    flex: 1 1 300px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.bars .bars-cont {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 500px;
    flex: 1 1 500px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 60vh;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
}

.bars .bar {
    border-radius: 10px;
    margin: 2vw;
    text-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    font-size: var(--step-0);
    justify-self: flex-end;
    font-family: "wild_worldbold";
    font-size: clamp(16px, 3vw, 36px);
}

.content {
    border-left: solid 1px white;
    padding: 0.5rem 2rem;
}

.staggered {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-column-gap: 4rem;
    column-gap: 4rem;
}

.staggered h3 {
    font-family: "wild_worldbold";
    font-size: clamp(16px, 6vw, 80px);
    letter-spacing: 0.03em;
}

.staggered_text {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 300px;
    flex: 1 1 300px;
}

.staggered_demo {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 500px;
    flex: 1 1 500px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.parallax-slab {
    position: relative;
    height: 500px;
    width: 100%;
    max-height: 500px;
    overflow: hidden;
}

.parallax-slab img {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 180%;
    -o-object-fit: cover;
    object-fit: cover;
}

.v-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.spacer {
    height: 10vh;
}
</style>
