import gsap from "gsap";

export function animateInOut(el) {
    onMounted(() => {
        gsap.from(el.value, {
            duration: 0.5,
            x: "-1000",
            autoAlpha: 0,
            ease: "power2.out",
        });
    });

    onBeforeRouteLeave((to, from, next) => {
        gsap.to(el.value, {
            duration: 0.5,
            x: "+1000",
            autoAlpha: 0,
            ease: "power2.in",
            onComplete: () => {
                next();
            },
        });
    });
}
