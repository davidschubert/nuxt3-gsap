<template>
    <header>
        <nav class="gsap-navigation">
            <ul>
                <li><NuxtLink to="/gsap/">Stagger</NuxtLink></li>
                <li><NuxtLink to="/gsap/timeline">Timeline</NuxtLink></li>
                <li>
                    <NuxtLink to="/gsap/composables1">Composables</NuxtLink>
                </li>
                <li><NuxtLink to="/gsap/transitions">Transitions</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>

<script setup></script>

<style scoped>
.gsap-navigation ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.gsap-navigation li:not(:last-child) {
    padding-right: 2rem;
}

.gsap-navigation a {
    font-size: 1rem;
    color: #5f5f5f;
    text-decoration: none;
    text-transform: lowercase;
}

.gsap-navigation a:hover {
    color: rgb(0, 0, 0);
}

/* Active Link */
.gsap-navigation a.router-link-active {
    color: rgb(0, 183, 110);
    cursor: default;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
}
</style>
