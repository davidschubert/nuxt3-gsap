<template>
    <header>
        <nav class="composables-navigation">
            <ul>
                <li><NuxtLink to="/gsap/composables1">Page 1</NuxtLink></li>
                <li><NuxtLink to="/gsap/composables2">Page 2</NuxtLink></li>
                <li><NuxtLink to="/gsap/composables3">Page 3</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>

<script setup></script>

<style scoped>
.composables-navigation ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.composables-navigation li:not(:last-child) {
    padding-right: 2rem;
}

.composables-navigation a {
    font-size: 1rem;
    color: #5f5f5f;
    text-decoration: none;
    text-transform: lowercase;
}

.composables-navigation a:hover {
    color: rgb(0, 0, 0);
}

/* Active Link */
.composables-navigation a.router-link-active {
    color: rgb(0, 183, 110);
    cursor: default;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
}
</style>
