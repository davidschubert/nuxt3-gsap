<template>
    <div
        ref="container"
        class="bg-green-300 text-gray-800 text-2xl p-52 rounded-md mb-5 flex w-full min-h-screen flex-col overflow-hidden"
    >
        <AnimationExamplesNav />
        <br />
        <div ref="content">
            <h1>GSAP Animation Basics – Simple Tween and Stagger Animation</h1>
            <p ref="pone">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum assumenda necessitatibus ea modi reprehenderit tenetur
                aut ad adipisci accusamus temporibus deserunt vel, laboriosam
                facilis quo distinctio facere esse rem voluptas.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                praesentium ullam esse rerum accusantium ducimus nulla natus
                perferendis eaque animi, quis, cupiditate illo enim velit
                pariatur quo soluta sapiente culpa.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                praesentium ullam esse rerum accusantium ducimus nulla natus
                perferendis eaque animi, quis, cupiditate illo enim velit
                pariatur quo soluta sapiente culpa.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                praesentium ullam esse rerum accusantium ducimus nulla natus
                perferendis eaque animi, quis, cupiditate illo enim velit
                pariatur quo soluta sapiente culpa.
            </p>
        </div>
    </div>
</template>

<script setup>
    /* gsap verfügbar machen */
    const { gsap } = useGsap();
    let ctx = null;

    /* html content vars */
    const container = ref(null);
    const content = ref(null);
    const pone = ref(null);

    onMounted(() => {
        ctx = gsap.context(() => {
            // Textabschnitte nacheinander einblenden
            gsap.from(content.value.children, {
                delay: 0,
                duration: 0.8,
                y: "+100",
                autoAlpha: 0,
                stagger: 0.25,
                ease: "back.out(1.7)",
            });

            // Paragraph One im loop animieren
            let tween = gsap.to(pone.value, {
                delay: 2,
                duration: 0.5,
                x: 100,
                ease: "power2.easeOut",
                repeat: -1,
                yoyo: true,
            });
            tween.pause();
            tween.seek(2);
            tween.progress(2);
            tween.play();
        });
    });

    onBeforeRouteLeave(() => {
        ctx.revert();
    });
</script>
