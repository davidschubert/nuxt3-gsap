<template>
    <section class="section is-hero">
        <div class="container is-hero">
            <div class="hero_sub-wrap"><p class="h5">Cowboy 4</p></div>
            <h1 class="display">Dream Machine</h1>
        </div>
        <div class="video-wrapper w-embed">
            <video
                muted="true"
                autoplay="true"
                playsinline="true"
                loading="lazy"
                class="loaded"
            >
                <source
                    src="https://cdn.shopify.com/s/files/1/0577/4222/9674/t/9/assets/cowboy-4--hero-us.webm?v=40493956932082050601654085811"
                />
                <source
                    src="https://cdn.shopify.com/s/files/1/0577/4222/9674/t/9/assets/cowboy-4--hero-us.webm?v=40493956932082050601654085811"
                    type="video/webm"
                />
            </video>
        </div>
    </section>
</template>

<style scoped>
.section.is-hero {
    position: relative;
    width: 100vw;
    background-image: radial-gradient(
        circle farthest-corner at 100% 0%,
        #363933,
        #1b1d19 81%
    );
}

.container {
    position: relative;
    z-index: 2;
    width: 100%;

    margin-right: auto;
    margin-left: auto;
    padding: 4em;
}

.display {
    padding: 0 0 0.3em 0;
}

.container.is-hero {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 100vh;
    padding-top: 5vw;
    padding-bottom: 13vw;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
}

.hero_sub-wrap {
    padding-bottom: 2em;
}

.h5 {
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 400;
}

.display {
    font-size: 9em;
    line-height: 1;
    font-weight: 400;
}
.w-embed:before,
.w-embed:after {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}

.w-embed:after {
    clear: both;
}
.w-embed:before,
.w-embed:after {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}

.video-wrapper {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 2;
    width: 100%;
    height: 100%;
}

.video-wrapper {
    pointer-events: none;
}
.video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
}
</style>
