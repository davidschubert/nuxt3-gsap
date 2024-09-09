<template>
    <div
        class="text-2xl p-52 flex w-full min-h-screen flex-col overflow-hidden bg-[#bcb8ad] text-[#202020]"
    >
        <AnimationExamplesNav />
        <br />
        <AnimationExamplesNavComposables />
        <br />
        <div ref="container">
            <h1>GSAP Animation Using Composables 3</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum assumenda necessitatibus ea modi reprehenderit tenetur
                aut ad adipisci accusamus temporibus deserunt vel, laboriosam
                facilis quo distinctio facere esse rem voluptas. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Et praesentium
                ullam esse rerum accusantium ducimus nulla natus perferendis
                eaque animi, quis, cupiditate illo enim velit pariatur quo
                soluta sapiente culpa. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Et praesentium ullam esse rerum accusantium
                ducimus nulla natus perferendis eaque animi, quis, cupiditate
                illo enim velit pariatur quo soluta sapiente culpa. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Et praesentium
                ullam esse rerum accusantium ducimus nulla natus perferendis
                eaque animi, quis, cupiditate illo enim velit pariatur quo
                soluta sapiente culpa.
            </p>
        </div>
    </div>
</template>

<script setup>
    const container = ref(null);

    animateInOut(container);
</script>
