<script setup></script>

<template>
    <footer>
        <div class="footer__address">
            David Schubert<br />
            Senior UI/UX Designer<br />
        </div>
        <nav class="footer__social">
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
        <div>
            <a href="#top">Top</a>
        </div>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: row;
    gap: calc(100% / 12);
    margin: 0 0 0 0;
    padding: 100px 60px 160px 60px;
    width: 100%;
    min-height: 40vh;
    background: rgba(0, 0, 0, 1);
}
.footer__address {
    width: 100%;
}
.footer__social {
    width: 100%;
}
.footer__social ul {
    list-style: none;
}

.footer__social li:not(:last-child) {
    padding-bottom: 1rem;
}

.footer__social a {
    color: rgb(29, 255, 221);
    text-decoration: none;
    text-transform: lowercase;
}

.footer__social a:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
}

a {
    color: rgb(29, 255, 221);
    text-decoration: none;
    text-transform: lowercase;
}

a:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
}
</style>
