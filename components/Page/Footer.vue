<template>
    <nav>
        <ul>
            <li><a href="/">Homepage</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/impressum">Impressum</a></li>
            <li><a href="/smooth">ScrollSmoother</a></li>
        </ul>
    </nav>
</template>

<style scoped>
/* Footer CSS */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #ff0000;
    color: #fff;
    z-index: 200;

    position: fixed;
    right: 0;
    bottom: 0;
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
