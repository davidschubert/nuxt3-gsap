<script setup>
// SEO and Meta
useHead({
    title: "GSAP Transitions | David Schubert – UI/UX Designer",
    meta: [{ name: "description", content: "My amazing gsap Transitions." }],
});

onMounted(() => {
    console.log(
        "%c Enter GSAP Transitions",
        "background: #000; color: #00ff00"
    );
});

onBeforeRouteLeave(() => {
    console.log("%c Exit GSAP Transitions", "background: #000; color: #00ff00");
});
</script>

<template>
    <GsapScrollsmoother :settings="'8'">
        <AnimationExamplesTransitions />
    </GsapScrollsmoother>
</template>

<style lang="scss" scoped>
.wrapper-gsap {
}
</style>
