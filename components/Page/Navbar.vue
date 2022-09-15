<template>
    <nav>
        <ul>
            <li><NuxtLink to="/">Homepage</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/impressum">Impressum</NuxtLink></li>
            <li><NuxtLink to="/smooth">ScrollSmoother</NuxtLink></li>
        </ul>
    </nav>
</template>

<style scoped>
/* Header CSS */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
    z-index: 200;

    position: fixed;
    right: 0;
    top: 0;
}

ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem;
}
</style>
