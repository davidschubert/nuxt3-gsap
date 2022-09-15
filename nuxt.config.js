import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    target: "static",
    sourcemap: false,

    app: {
        head: {
            htmlAttrs: { lang: "en", dir: "ltr" },
            meta: [
                { title: "David Schubert | Front End Developer" },
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
                { name: "apple-mobile-web-app-capable", content: "yes" },
                {
                    name: "copyrighted-site-verification",
                    content: "c552f044f4e41c2b",
                },
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
                        "I will build you website as quick as possible and with high attention to details👌",
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
                /*{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
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
                { rel: "manifest", href: "/site.webmanifest" },*/
            ],
            /*script: [
                {
                    type: "text/javascript",
                    src: "/js/style.js",
                    body: true,
                },
            ],*/
        },
    },

    css: ["normalize.css/normalize.css", "@/assets/css/main.scss"],

    build: {
        transpile: ["gsap"],
    },
});
