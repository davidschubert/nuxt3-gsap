export default () => {
    const nuxtApp = useNuxtApp();

    return {
        gsap: nuxtApp.$gsap,
        ScrollTrigger: nuxtApp.$ScrollTrigger,
        ScrollSmoother: nuxtApp.$ScrollSmoother,
        SplitText: nuxtApp.$SplitText,
    };
};
