<script setup>
// SEO and Meta
useHead({
    title: "Smooth 2 | David Schubert — UI/UX Designer",
    meta: [{ name: "description", content: "My amazing smooth 2." }],
});

const { gsap, ScrollTrigger, ScrollSmoother, SplitText } = useGsap();
let smoother = null;
let ctx = null;

onMounted(() => {
    ctx = gsap.context(() => {
        // create the scrollSmoother before your scrollTriggers
        smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            overshoot: 0.1,
            speed: 2.0,
        });

        smoother.effects("img", { speed: "auto" });

        let headings = gsap.utils.toArray(".js-title").reverse();
        headings.forEach((heading, i) => {
            let headingIndex = i + 1;
            let mySplitText = new SplitText(heading, { type: "chars" });
            let chars = mySplitText.chars;

            chars.forEach((char, i) => {
                smoother.effects(char, {
                    lag: (i + headingIndex) * 0.1,
                    speed: 1,
                });
            });
        });

        let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLines,
                start: "top 90%",
                end: "bottom 60%",
                scrub: 2,
                markers: false,
                toggleActions: "play none play reset",
            },
        });

        const itemSplitted = new SplitText(splitTextLines, { type: "lines" });
        tl.from(itemSplitted.lines, {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
            ease: "back.inOut",
        });
    });

    console.log(
        "%c Enter GSAP SmoothScroller",
        "background: #000; color: #bada55"
    );
});

onBeforeUnmount(() => {
    smoother.scrollTo(0);
    smoother.kill();
    ctx.revert();

    console.log(
        "%c Exit GSAP SmoothScroller",
        "background: #000; color: #bada55"
    );
});
</script>

<template>
    <main id="smooth-wrapper">
        <div id="smooth-content">
            <div class="relative overflow-hidden w-full h-[90vh]">
                <img
                    class="absolute bottom-0 mx-auto w-full object-cover h-[140%]"
                    data-speed="auto"
                    src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                />
            </div>

            <div class="relative px-6 lg:px-44">
                <div
                    class="grid grid-cols-3 gap-4 border-y-2 border-dashed border-pink-500 my-44"
                >
                    <div
                        class="relative overflow-hidden aspect-w-1 aspect-h-1 rounded-lg"
                        data-speed="1"
                        data-lag="0.1"
                    >
                        <img
                            class="absolute bottom-0 mx-auto w-full object-cover h-[220%]"
                            data-speed="auto"
                            src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
                        />
                    </div>
                    <div
                        class="relative overflow-hidden aspect-w-1 aspect-h-1 rounded-lg"
                        data-speed="1"
                        data-lag="0.4"
                    >
                        <img
                            class="absolute bottom-0 mx-auto w-full object-cover h-[200%]"
                            data-speed="auto"
                            src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
                        />
                    </div>
                    <div
                        class="relative overflow-hidden aspect-w-1 aspect-h-1 rounded-lg"
                        data-speed="1"
                        data-lag="0.8"
                    >
                        <img
                            class="absolute bottom-0 mx-auto w-full object-cover h-[180%]"
                            data-speed="auto"
                            src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
                        />
                    </div>
                </div>

                <div
                    class="relative h-96 flex items-center border-y-2 border-dashed border-pink-500 my-44"
                >
                    <h1 class="js-title">Smoother</h1>
                    <h1 class="js-title">Smoother</h1>
                    <h1 class="js-title">Smoother</h1>
                </div>

                <div
                    class="grid grid-cols-3 gap-4 border-y-2 border-dashed border-pink-500 my-44"
                >
                    <div
                        class="relative overflow-hidden aspect-w-3 aspect-h-4 rounded-lg"
                        data-speed="1"
                        data-lag="0.1"
                    >
                        <img
                            class="absolute bottom-0 mx-auto w-full object-cover h-[150%]"
                            data-speed="auto"
                            src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
                        />
                    </div>
                    <div
                        class="relative overflow-hidden aspect-w-3 aspect-h-4 rounded-lg"
                        data-speed="1"
                        data-lag="0.4"
                    >
                        <img
                            class="absolute bottom-0 mx-auto w-full object-cover h-[150%]"
                            data-speed="auto"
                            src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
                        />
                    </div>
                    <div
                        class="relative overflow-hidden aspect-w-3 aspect-h-4 rounded-lg"
                        data-speed="1"
                        data-lag="0.8"
                    >
                        <img
                            class="absolute bottom-0 mx-auto w-full object-cover h-[150%]"
                            data-speed="auto"
                            src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
                        />
                    </div>
                </div>

                <div class="my-24 text-center">
                    <h1
                        class="js-splittext-lines text-6xl font-bold text-center"
                    >
                        Split by <span class="text-pink-500">LINES:</span> Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        gravida faucibus tincidunt. Donec a nisl dignissim,
                        dictum sem in, mattis velit. Nulla nec gravida erat.
                        Nunc scelerisque augue placerat lacus tristique rutrum.
                        Vestibulum vulputate felis quis dolor lacinia pretium.
                    </h1>
                </div>

                <section
                    class="container px-0 md:flex md:items-center md:space-x-28 bg-white bg-opacity-5 my-44"
                >
                    <div
                        class="relative border-l-4 border-pink-500 pl-6 py-12 md:py-0"
                    >
                        <h2 class="text-6xl font-bold mb-6">
                            <strong>Easy parallax image effects</strong>
                        </h2>
                        <p>
                            Pop your images in a container with overflow hidden,
                            size them a little larger than the container and set
                            data-speed to auto. GSAP does the rest.
                        </p>
                    </div>
                    <div
                        class="relative overflow-hidden w-full h-screen rounded-lg"
                    >
                        <img
                            class="absolute bottom-0 mx-auto w-full object-cover h-[120%]"
                            data-speed="auto"
                            src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
                            alt=""
                        />
                    </div>
                </section>

                <section
                    class="container px-0 md:flex md:items-center md:space-x-28 bg-white bg-opacity-5 mt-12 my-44"
                >
                    <div
                        class="relative overflow-hidden w-full h-screen rounded-lg"
                    >
                        <img
                            class="absolute bottom-0 mx-auto w-full object-cover h-[120%]"
                            data-speed="auto"
                            src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
                            alt=""
                        />
                    </div>
                    <div
                        class="relative border-r-4 border-pink-500 pr-6 py-12 md:py-0"
                    >
                        <h2 class="text-6xl font-bold mb-6">
                            <strong>Easy parallax image effects</strong>
                        </h2>
                        <p>
                            Pop your images in a container with overflow hidden,
                            size them a little larger than the container and set
                            data-speed to auto. GSAP does the rest.
                        </p>
                    </div>
                </section>

                <div class="my-44 flex justify-center space-x-12">
                    <div
                        class="p-16 my-12 bg-pink-500 rounded-lg"
                        data-speed="1"
                        data-lag="0.2"
                    ></div>
                    <div
                        class="p-16 my-12 bg-pink-500 rounded-lg"
                        data-speed="1"
                        data-lag="0.4"
                    ></div>
                    <div
                        class="p-16 my-12 bg-pink-500 rounded-lg"
                        data-speed="1"
                        data-lag="0.6"
                    ></div>
                    <div
                        class="p-16 my-12 bg-pink-500 rounded-lg"
                        data-speed="1"
                        data-lag="0.8"
                    ></div>
                    <div
                        class="p-16 my-12 bg-pink-500 rounded-lg"
                        data-speed="1"
                        data-lag="1"
                    ></div>
                </div>

                <div class="my-44 flex justify-center space-x-12">
                    <div
                        class="p-16 my-12 bg-pink-500 rounded-lg"
                        data-speed="0.9"
                    ></div>
                    <div
                        class="p-16 my-12 bg-pink-500 rounded-lg"
                        data-speed="1.1"
                    ></div>
                    <div
                        class="p-16 my-12 bg-pink-500 rounded-lg"
                        data-speed="0.75"
                    ></div>
                    <div
                        class="p-16 my-12 bg-pink-500 rounded-lg"
                        data-speed="1.25"
                    ></div>
                    <div
                        class="p-16 my-12 bg-pink-500 rounded-lg"
                        data-speed="1.5"
                    ></div>
                </div>

                <div
                    class="relative border-y-2 border-dashed border-pink-500 mt-44"
                >
                    <h2 class="bg-pink-500 text-center text-2xl p-12">END</h2>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
body {
    overscroll-behavior: none;
}

.js-title {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 150px;
    font-weight: bold;
}

.js-title:nth-child(1) {
    color: #1dffff;
}

.js-title:nth-child(2) {
    color: #fe0604;
    mix-blend-mode: color;
}
</style>
