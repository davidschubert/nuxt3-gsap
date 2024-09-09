<script setup lang="ts">
    import gsap from "gsap";

    /* Transition */
    function onBeforeEnter(el: Element) {
        console.log("onBeforeEnter");
    }

    function onEnter(el: Element, done: () => void) {
        console.log("enter");
        gsap.timeline()
            .to("#classic-tr", {
                duration: 1.1,
                height: "0vh",
                bottom: "100%",
                ease: "power3.out",
            })
            .set("#classic-tr", {
                height: "0vh",
                bottom: "0%",
                onComplete: done,
            });
    }

    function onAfterEnter(el: Element) {
        console.log("onAfterEnter");
    }

    function onLeave(el: Element, done: () => void) {
        console.log("leave");
        gsap.to("#classic-tr", {
            duration: 1.1,
            height: "100vh",
            bottom: "0%",
            ease: "power3.in",
            onComplete: done,
        });
    }

    onMounted(() => {
        console.log("%c Enter app", "background: #000; color: #fff");
    });

    onUnmounted(() => {
        console.log("%c Exit app", "background: #000; color: #fff");
    });

    /*definePageMeta({
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
    },
});*/
</script>

<template>
    <div>
        <div
            id="test"
            class="grid overflow-hidden fixed top-0 left-0 w-screen h-screen pointer-events-none z-[999]"
        >
            <div
                id="classic-tr"
                class="relative p-0 place-self-end w-full bg-blue-500 h-0 bottom-0"
            ></div>
        </div>

        <router-view v-slot="{ Component }">
            <transition
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @after-enter="onAfterEnter"
                @leave="onLeave"
                :css="false"
                mode="out-in"
                appear
                ><div>
                    <NuxtLayout>
                        <NuxtPage />
                        <component :is="Component" />
                    </NuxtLayout>
                </div>
            </transition>
        </router-view>
        <!--<Transition
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        :css="false"
        mode="out-in"
        appear
    >
        <div>
            
                <NuxtPage />
            </NuxtLayout>
        </div>
    </Transition>-->
    </div>
</template>
