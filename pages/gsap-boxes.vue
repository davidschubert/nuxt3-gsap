<script setup>
    // SEO and Meta
    useHead({
        title: "Toggle Boxes | David Schubert – UI/UX Designer",
        meta: [{ name: "description", content: "My amazing boxes." }],
    });

    const { gsap } = useGsap();
    let ctx = null;
    let scope = ref(null);
    const tl = ref(null);

    const toggleTimeline = () => {
        tl.value.reversed(!tl.value.reversed());
    };

    onMounted(() => {
        ctx = gsap.context((self) => {
            const boxes = self.selector(".box");
            tl.value = gsap
                .timeline()
                .to(boxes[0], { x: 120, rotation: 360 })
                .to(boxes[1], { x: -120, rotation: -360 }, "<")
                .to(boxes[2], { y: -166 })
                .reverse();
        }, scope.value);
    });

    onUnmounted(() => {
        ctx.revert();
    });
</script>

<template>
    <section
        class="flex flex-col items-center justify-center w-full h-screen gap-4 bg-gray-700"
        ref="scope"
    >
        <h1 class="text-2xl font-bold">
            Use the button to toggle the Timeline
        </h1>
        <div>
            <button
                @click="toggleTimeline"
                class="px-6 py-3 text-sm font-semibold uppercase transition-colors duration-200 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
                Toggle Timeline
            </button>
        </div>
        <div
            class="w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-xl font-bold text-white box"
        >
            Box 1
        </div>
        <div
            class="w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-xl font-bold text-white box"
        >
            Box 2
        </div>
        <div
            class="w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-xl font-bold text-white box"
        >
            Box 3
        </div>
    </section>
</template>
