<template>
    <div class="composable color">
        <AnimationExamplesNav />
        <br />
        <AnimationExamplesNavComposables />
        <br />
        <div ref="container">
            <h1>GSAP Animation Using Composables 2</h1>
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

<style lang="scss" scoped>
.composable {
    font-size: 26px;
    padding: 200px;
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    overflow: hidden;
}

.color {
    background-color: #eacbd1;
    color: #202020;
}
</style>
