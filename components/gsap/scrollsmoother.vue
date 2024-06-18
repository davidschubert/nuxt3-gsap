<script setup>
const props = defineProps({
    settings: {
        type: String,
        required: false,
    },
});

let gsapSettings = props.settings;

/* GSAP */
const { gsap, ScrollTrigger, ScrollSmoother } = useGsap();

let ctx = null;
let smoother = null;

onMounted(() => {
    console.log("ScrollSmoother Setting:", gsapSettings);
    //console.log(props.settings);

    ctx = gsap.context(() => {
        smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.2,
            effects: true,
            smoothTouch: 0,
            normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
            ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
            preventDefault: true, // prevents the default behavior of the browser when scrolling
            //onUpdate: (self) =>
            //console.log("GSAP ScrollSmoother progress", self.progress),
        });
    });

    console.log(
        "%c Enter GSAP Create ScrollSmoother Component",
        "background: #0000ff; color: #fff"
    );

    smoother.paused(true);
    smoother.scrollTo(0, false);

    function meineFunktion() {
        console.log("Funktion nach 230 Millisekunden ausgeführt");
        smoother.paused(false);
    }
    setTimeout(meineFunktion, 220);

    //ScrollTrigger.refresh();
});

// Clean up when the layout is onBeforeUnmount
onBeforeRouteLeave(() => {
    console.log("%c Exit GSAP Cleanup 1", "background: #0000ff; color: #fff");
    ScrollTrigger.killAll();
    smoother.paused(true);
    smoother.scrollTo(0, false);
    smoother.kill();
    ctx.revert();

    console.log("%c Exit GSAP Cleanup 2", "background: #0000ff; color: #fff");
});
</script>

<template>
    <div>
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <slot />
            </div>
        </div>
        <!--<div class="gsapinfo">
        GSAP ScrollSmoother Component Settings: {{ settings }}
    </div>-->
    </div>
</template>

<style scoped>
.gsapinfo {
    background-color: red;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 2.5px;
    line-height: 9px;
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    left: 0;
}

/* Boost GSAP Performance */
#smooth-content {
    will-change: transform;
}
</style>
