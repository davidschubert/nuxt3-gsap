<template>
    <header>
        <nav class="page-navigation">
            <ul class="flex list-none m-0 p-0">
                <li class="pr-8"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="pr-8"><NuxtLink to="/contact">Contact</NuxtLink></li>
                <li class="pr-8"><NuxtLink to="/imprint">Imprint</NuxtLink></li>
                <li class="pr-8"><NuxtLink to="/about">About</NuxtLink></li>
                <li class="pr-8"><NuxtLink to="/gsap">GSAP</NuxtLink></li>
                <li class="pr-8">
                    <NuxtLink to="/gsap-boxes">Boxes</NuxtLink>
                </li>
                <li class="pr-8"><NuxtLink to="/gsap-test">Test</NuxtLink></li>
                <li class="pr-8">
                    <NuxtLink to="/gsap-scroll">Scroll</NuxtLink>
                </li>
                <li class="last:pr-0">
                    <NuxtLink to="/smooth">Smooth</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup></script>

<style scoped>
    .page-navigation a {
        color: #f1f1f1;
        text-decoration: none;
        text-transform: lowercase;
    }

    .page-navigation a:hover {
        color: white;
    }

    /* Active Link */
    .page-navigation a.router-link-active {
        color: white;
        cursor: default;
        text-decoration-line: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 6px;
    }
</style>
