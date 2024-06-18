<script setup>
/* gsap verfügbar machen */
const { gsap, ScrollTrigger } = useGsap();

/* html content vars */
let ctxTwo = null;

onMounted(() => {
    ctxTwo = gsap.context(() => {
        gsap.to("body", { backgroundColor: "#222", color: "#fff" });

        // performance hack for gsap
        gsap.utils.toArray(".color").forEach((el) =>
            ScrollTrigger.create({
                trigger: el,
                start: "top 120%",
                end: "bottom -20%",
                onToggle: (self) => {
                    el.style.opacity = self.isActive ? "1" : "0.1";
                    el.style.pointerEvents = self.isActive ? "all" : "none";
                    el.style.visibility = self.isActive ? "visible" : "hidden";
                },
            })
        );

        // change background color
        gsap.utils.toArray(".color").forEach(function (elem) {
            // get the color from the data attributes
            var bgcolor = elem.getAttribute("data-bgcolor");
            var textcolor = elem.getAttribute("data-txtcolor");

            // create the ScrollTrigger
            ScrollTrigger.create({
                trigger: elem,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: () =>
                    gsap.to(".color", {
                        backgroundColor: bgcolor,
                        color: textcolor,
                    }),
                onLeave: () =>
                    gsap.to(".color", {
                        backgroundColor: "#222",
                        color: "#fff",
                    }),
                onLeaveBack: () =>
                    gsap.to(".color", {
                        backgroundColor: "#222",
                        color: "#fff",
                    }),
                onEnterBack: () =>
                    gsap.to(".color", {
                        backgroundColor: bgcolor,
                        color: textcolor,
                    }),
                markers: false,
            });
        });
    });
});

onBeforeRouteLeave(() => {
    ctxTwo.revert();
});
</script>

<template>
    <div>
        <section class="color" data-bgcolor="#bcb8ad" data-txtcolor="#032f35">
            <h1>Change background colour with GSAP ScrollTrigger</h1>
            <img src="/img/pexels-photo-3062948.webp" alt="" />
        </section>
        <section class="color" data-bgcolor="#eacbd1" data-txtcolor="#536fae">
            <img src="/img/pexels-photo-4467879.webp" alt="" />
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </section>
        <section class="color" data-bgcolor="#536fae" data-txtcolor="#eacbd1">
            <img src="/img/pexels-photo-5604966.jpeg" alt="" />
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </section>
        <section class="color" data-bgcolor="#e3857a" data-txtcolor="#f1dba7">
            <img src="/img/pexels-photo-4791474.webp" alt="" />
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.color {
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 50px 10vw;
    margin: 0;
    place-items: center;
    content-visibility: auto;
}

img {
    max-height: 62vh;
    width: 100%;
    object-fit: contain;

    section:first-child & {
        position: absolute;
    }
}

h1 {
    display: flex;
    font-size: 4rem;
    z-index: 2;
    line-height: 1.2;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
}

h2 {
    font-size: 2rem;
    max-width: 400px;
}
</style>
