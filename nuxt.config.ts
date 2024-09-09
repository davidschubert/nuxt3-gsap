export default defineNuxtConfig({
    // PR: To build your static (pre-rendered) site, you have to make sure target is set to static in your nuxt.config.js file
    // SSR: To build your Nuxt project using Server Side Rendering (SSR) you need to ensure your target is server in your Nuxt config file. If the property is missing, that's fine, it's the default.
    target: "static",

    build: {
        transpile: ["gsap"],
    },

    app: {
        head: {
            charset: "utf-8",
            htmlAttrs: { lang: "en", dir: "ltr" },
            title: "David Schubert — UI/UX Designer",
            meta: [
                { title: "David Schubert — UI/UX Designer" },
                { lang: "en" },
                { language: "English" },
                { property: "name", name: "name", content: "David Schubert" },
                { charset: "utf-8" },
                { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
                {
                    "http-equiv": "Reply-to",
                    content: "mail@davidschubert.com",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content:
                        "I will build you website as quick as possible and with high attention to details👌",
                },
                { name: "format-detection", content: "telephone=no" },
                { name: "robots", content: "all" },
                { name: "theme-color", content: "var(--surface-color)" },
                { name: "mobile-web-app-capable", content: "yes" },
                {
                    property: "url",
                    name: "url",
                    content: "https://davidschubert.com",
                },
                {
                    property: "og:site_name",
                    name: "og:site_name",
                    content: "David Schubert",
                },
                {
                    property: "og:title",
                    name: "og:title",
                    content: "Front End Developer",
                },
                {
                    property: "og:description",
                    name: "og:description",
                    content:
                        "I will build you website as quick as possible and with high attention to details 👌",
                },
                { property: "og:locale", name: "og:locale", content: "en" },
                {
                    property: "og:url",
                    name: "og:url",
                    content: "https://davidschubert.com",
                },
                { property: "og:type", name: "og:type", content: "website" },
                {
                    property: "og:image",
                    name: "og:image",
                    content: "https://bogdankostyuk.xyz/logo.png",
                },
                {
                    property: "og:image:width",
                    name: "og:image:width",
                    content: "1440",
                },
                {
                    property: "og:image:height",
                    name: "og:image:height",
                    content: "1440",
                },
            ],
            link: [
                { rel: "canonical", href: "https://davidschubert.com/" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.ico",
                    sizes: "any",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
            /*style: [],*/
            /*script: [
            {
                type: "text/javascript",
                src: "/js/style.js",
                body: true,
            },
        ],*/
            noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: "JavaScript is required 🥰" },
            ],
        },

        /* this fixes GSAP animations in onMounted hooks */
        layoutTransition: false,
        pageTransition: true,
        //pageTransition: { name: "page", mode: "out-in" },
    },

    devtools: true,
    modules: ["@nuxtjs/tailwindcss"],
    css: ["~/assets/css/styles.scss"],

    tailwindcss: {
        cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
        configPath: "tailwind.config",
        exposeConfig: {
            level: 2,
        },
        config: {},
        viewer: true,
    },

    compatibilityDate: "2024-09-08",
});
