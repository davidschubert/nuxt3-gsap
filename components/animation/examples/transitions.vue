<template>
    <div
        class="bg-green-300 text-gray-800 text-2xl p-52 rounded-md mb-5 flex w-full min-h-screen flex-col overflow-hidden"
    >
        <AnimationExamplesNav />
        <br />
        <Transition
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            :css="false"
            appear
        >
            <div ref="anicon">
                <h1>GSAP Transition with Vue</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorum assumenda necessitatibus ea modi reprehenderit
                    tenetur aut ad adipisci accusamus temporibus deserunt vel,
                    laboriosam facilis quo distinctio facere esse rem voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    praesentium ullam esse rerum accusantium ducimus nulla natus
                    perferendis eaque animi, quis, cupiditate illo enim velit
                    pariatur quo soluta sapiente culpa.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    praesentium ullam esse rerum accusantium ducimus nulla natus
                    perferendis eaque animi, quis, cupiditate illo enim velit
                    pariatur quo soluta sapiente culpa. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Et praesentium ullam
                    esse rerum accusantium ducimus nulla natus perferendis eaque
                    animi, quis, cupiditate illo enim velit pariatur quo soluta
                    sapiente culpa.
                </p>
                <button @click="show = !show">toggle</button>
                <Transition
                    enter-active-class="transition-opacity duration-1000 ease-in-out"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition-opacity duration-1000 ease-in-out"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                    appear
                >
                    <div v-show="show">Hello</div>
                </Transition>
            </div>
        </Transition>
    </div>
</template>

<script setup>
    /* gsap verfügbar machen */
    import gsap from "gsap";

    const show = ref(true);
    const anicon = ref(true);

    /* vue3 transitions gsap functions */
    function onBeforeEnter(el) {
        console.log("onBeforeEnter");

        gsap.set(el, {
            scale: 0.5,
            autoAlpha: 0,
        });
    }

    function onEnter(el, done) {
        console.log("onEnter");

        gsap.to(el, {
            delay: 1,
            duration: 0.5,
            scale: 1,
            autoAlpha: 1,
            ease: "power2.out",
            onComplete: done,
        });
    }

    onMounted(() => {
        console.log("onMounted");
    });

    onBeforeRouteLeave(() => {
        console.log("onBeforeRouteLeave");
    });
</script>
