<template>
    <div>
        <strong>Contact</strong>
        <nav>
            <ul>
                <li><NuxtLink to="/">Homepage</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                <li><NuxtLink to="/impressum">Impressum</NuxtLink></li>
                <li><NuxtLink to="/smooth">ScrollSmoother</NuxtLink></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
definePageMeta({
    title: "contact",
    layout: "page",
});
</script>
