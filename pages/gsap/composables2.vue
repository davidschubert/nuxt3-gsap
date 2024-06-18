<script setup>
// SEO and Meta
useHead({
    title: "GSAP Composables 2 | David Schubert – UI/UX Designer",
    meta: [{ name: "description", content: "My amazing gsap Composables 2." }],
});

onMounted(() => {
    console.log(
        "%c Enter GSAP Composables 2",
        "background: #000; color: #00ff00"
    );
});

onBeforeRouteLeave(() => {
    console.log(
        "%c Exit GSAP Composables 2",
        "background: #000; color: #00ff00"
    );
});
</script>

<template>
    <GsapScrollsmoother :settings="'8'">
        <AnimationExamplesComposables2 />
    </GsapScrollsmoother>
</template>

<style lang="scss" scoped>
.wrapper-gsap {
}
</style>
