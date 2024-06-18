export const useGsap = () => {
    const nuxtApp = useNuxtApp();

    return {
        gsap: nuxtApp.$gsap,
        ScrollToPlugin: nuxtApp.$ScrollToPlugin,
        ScrollTrigger: nuxtApp.$ScrollTrigger,
        SplitText: nuxtApp.$SplitText,
        ScrollSmoother: nuxtApp.$ScrollSmoother,
    };
};
