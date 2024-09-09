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

                /*const tl = gsap.timeline();

            tl.to(".loading-screen", {
                duration: 1.2,
                width: "100%",
                left: "0%",
                ease: "Expo.easeInOut",
            });

            tl.to("#loading-screen", {
                duration: 1,
                width: "100%",
                left: "100%",
                ease: "Expo.easeInOut",
                delay: 0.3,
            });

            tl.set("#loading-screen", { left: "-100%", onComplete: done });*/

                gsap.to("#loading-screen", {
                    delay: 1,
                    duration: 1.2,
                    scale: 0.5,
                    autoAlpha: 0,
                    ease: "Expo.easeInOut",
                    onComplete: done,
                });
            },
        },
    });

    // SEO and Meta
    useHead({
        title: "Contact | David Schubert — UI/UX Designer",
        meta: [{ name: "description", content: "My amazing contact." }],
    });

    onMounted(() => {
        console.log("%c Enter Contact", "background: #000; color: #ff0000");
    });

    onBeforeRouteLeave(() => {
        console.log("%c Exit Contact", "background: #000; color: #ff0000");
    });
</script>

<template>
    <GsapScrollsmoother>
        <div
            class="fixed top-0 left-0 w-full h-screen overflow-hidden z-10 pointer-events-none"
        >
            <div
                class="loading-screen relative p-0 bg-[#4bedc2] w-0 h-full"
                id="loading-screen"
            ></div>
        </div>
        <div
            class="w-full h-screen bg-gradient-to-br from-[#fcd8c0] via-[#fef8ed] to-[#fefcf5] text-[#1d1d1d] flex items-center justify-center text-9xl font-normal content-visibility-auto"
        >
            <span data-lag="0.4" data-speed="1">contact</span>
        </div>
        <AnimationChangebgcolor />
        <div
            class="flex flex-col items-center justify-center min-h-screen p-0 bg-red-200 bg-opacity-20"
        >
            <div class="w-[62%] text-center py-40">
                <h1>Contact</h1>
                <h2>
                    Ut consequat semper viverra nam libero justo laoreet sit
                    amet.
                </h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose.
                </p>
                <AnimationText />
                <p>
                    3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labor.
                </p>
                <p>
                    4 Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labor.
                </p>
                <p>
                    5 Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea tak.
                </p>
                <p>
                    1 Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam volu.
                </p>
                <p>
                    2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labor.
                </p>
                <p>
                    3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labor.
                </p>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                </p>
            </div>
            <PageFooter />
        </div>
    </GsapScrollsmoother>
</template>
