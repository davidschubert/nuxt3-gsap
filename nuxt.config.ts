import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {
                    type: "text/javascript",
                    src: "/js/gsap.min.js",
                    body: true,
                },
                {
                    type: "text/javascript",
                    src: "/js/ScrollTrigger.min.js",
                    body: true,
                },
                {
                    type: "text/javascript",
                    src: "/js/ScrollSmoother.min.js",
                    body: true,
                },
                {
                    type: "text/javascript",
                    src: "/js/SplitText.min.js",
                    body: true,
                },
                {
                    type: "text/javascript",
                    src: "/js/style.js",
                    body: true,
                },
            ],
        },
    },
    build: {
        transpile: ["gsap"],
    },
});
