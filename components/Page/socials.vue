<script setup></script>

<template>
    <div>
        <nav class="social-links">
            <ul>
                <li><a href="#" target="_blank">LinkedIn</a></li>
                <li><a href="#" target="_blank">XING</a></li>
                <li><a href="#" target="_blank">YouTube</a></li>
                <li><a href="#" target="_blank">Instagram</a></li>
                <li><a href="#" target="_blank">Twitter</a></li>
                <li><a href="#" target="_blank">Facebook</a></li>
                <li><a href="#" target="_blank">Github</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.social-links ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.social-links li:not(:last-child) {
    padding-right: 2rem;
}

.social-links a {
    color: white;
    text-decoration: none;
    text-transform: lowercase;
}

.social-links a:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
}
</style>
