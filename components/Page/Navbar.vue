<template>
    <header>
        <nav class="page-navigation">
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                <li><NuxtLink to="/imprint">Imprint</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/gsap">GSAP</NuxtLink></li>
                <li><NuxtLink to="/gsap-boxes">Boxes</NuxtLink></li>
                <li><NuxtLink to="/gsap-test">Test</NuxtLink></li>
                <li><NuxtLink to="/gsap-scroll">Scroll</NuxtLink></li>
                <li><NuxtLink to="/smooth">Smooth</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>

<script setup></script>

<style scoped>
.page-navigation ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.page-navigation li:not(:last-child) {
    padding-right: 2rem;
}

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
