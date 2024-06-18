import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(
        ScrollToPlugin,
        ScrollTrigger,
        SplitText,
        ScrollSmoother
    );

    return {
        provide: {
            gsap,
            ScrollToPlugin,
            ScrollTrigger,
            SplitText,
            ScrollSmoother,
        },
    };
});
