<template>
    <div
        class="bg-green-300 text-gray-800 text-2xl p-52 rounded-md mb-5 flex w-full min-h-screen flex-col overflow-hidden"
    >
        <AnimationExamplesNav />
        <br />
        <div>
            <h1 ref="title">GSAP Animation Example 2 – Timeline</h1>
            <p ref="paraOne">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum assumenda necessitatibus ea modi reprehenderit tenetur
                aut ad adipisci accusamus temporibus deserunt vel, laboriosam
                facilis quo distinctio facere esse rem voluptas.
            </p>
            <p ref="paraTwo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                praesentium ullam esse rerum accusantium ducimus nulla natus
                perferendis eaque animi, quis, cupiditate illo enim velit
                pariatur quo soluta sapiente culpa.
            </p>
            <p ref="paraThree">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                praesentium ullam esse rerum accusantium ducimus nulla natus
                perferendis eaque animi, quis, cupiditate illo enim velit
                pariatur quo soluta sapiente culpa. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Et praesentium ullam esse rerum
                accusantium ducimus nulla natus perferendis eaque animi, quis,
                cupiditate illo enim velit pariatur quo soluta sapiente culpa.
            </p>
        </div>
    </div>
</template>

<script setup>
    /* gsap verfügbar machen */
    const { gsap } = useGsap();
    let ctx = null;

    /* html content vars */
    const title = ref(null);
    const paraOne = ref(null);
    const paraTwo = ref(null);
    const paraThree = ref(null);

    onMounted(() => {
        ctx = gsap.context(() => {
            // Animation 2
            //console.log(paraTwo.value);

            const tl = gsap.timeline({ delay: 1, paused: true });

            tl.from(title.value, { x: "-200", autoAlpha: 0, duration: 1 });
            tl.from(paraOne.value, { x: "+200", autoAlpha: 0, duration: 1 });
            tl.from(paraTwo.value, { x: "-200", autoAlpha: 0, duration: 1 });
            tl.from(paraThree.value, { x: "+200", autoAlpha: 0, duration: 1 });

            tl.play();
        });
    });

    onBeforeRouteLeave(() => {
        ctx.revert();
    });
</script>
