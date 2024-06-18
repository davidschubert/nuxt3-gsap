<script setup>
// SEO and Meta
useHead({
    title: "GSAP Example 2 | David Schubert – UI/UX Designer",
    meta: [{ name: "description", content: "My amazing gsap animation." }],
});

onMounted(() => {
    console.log("%c Enter GSAP Ani 2", "background: #000; color: #00ff00");
});

onBeforeRouteLeave(() => {
    console.log("%c Exit GSAP Ani 2", "background: #000; color: #00ff00");
});
</script>

<template>
    <GsapScrollsmoother :settings="'8'">
        <AnimationExamplesTimeline />
    </GsapScrollsmoother>
</template>

<style lang="scss" scoped>
.wrapper-gsap {
}
</style>
