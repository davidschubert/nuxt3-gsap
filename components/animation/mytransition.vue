<script setup>
const { gsap } = useGsap();

// called before the element is inserted into the DOM.
// use this to set the "enter-from" state of the element
const onBeforeEnter = (el) => {
    console.log("fire before enter");
    gsap.set(el, {
        scaleX: 0.25,
        scaleY: 0.25,
        opacity: 1,
    });
};

// called one frame after the element is inserted.
// use this to start the animation.
const onEnter = (el, done) => {
    // call the done callback to indicate transition end
    // optional if used in combination with CSS
    console.log("fire enter");
    gsap.to(el, {
        duration: 1,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        ease: "elastic.inOut(2.5, 1)",
        onComplete: done,
    });
    done();
};

// called when the enter transition has finished.
const onAfterEnter = (el) => {
    console.log("fire after enter");
};
const onEnterCancelled = (el) => {
    console.log("fire enter cancelled");
};

// called before the leave hook.
// Most of the time, you should just use the leave hook.
const onBeforeLeave = (el) => {
    console.log("fire before leave");
};

// called when the leave transition starts.
// use this to start the leaving animation.
const onLeave = (el, done) => {
    // call the done callback to indicate transition end
    // optional if used in combination with CSS
    console.log("fire leave");
    gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: "elastic.inOut(2.5, 1)",
    });
    gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done,
    });
    done();
};

// called when the leave transition has finished and the
// element has been removed from the DOM.
const onAfterLeave = (el) => {
    console.log("fire after leave");
};

// only available with v-show transitions
const onLeaveCancelled = (el) => {
    console.log("fire leave cancelled");
};
</script>

<template>
    <!-- wrap the built-in Transition component -->
    <Transition
        name="my-transition"
        @BeforeEnter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
    >
        <slot></slot>
        <!-- pass down slot content -->
    </Transition>
</template>

<style>
/*
  Necessary CSS...
  Note: avoid using <style scoped> here since it
  does not apply to slot content.
*/
</style>
