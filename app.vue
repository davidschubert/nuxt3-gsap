<script setup lang="ts">
import gsap from "gsap";

/* Transition */
function onBeforeEnter() {
    console.log("onBeforeEnter");
}

function onEnter(el, done) {
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

function onAfterEnter(el) {
    //isRoute.isNewPage++;
    console.log("onAfterEnter");
}

function onLeave(el, done) {
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
        <div id="test">
            <div id="classic-tr"></div>
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

<style scoped>
#test {
    display: grid;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 999;
}
#classic-tr {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    place-self: end;
    width: 100%;
    background-color: blue;
    height: 0vh;
    bottom: 0%;
}
</style>
