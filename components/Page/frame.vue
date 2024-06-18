<script setup>
const route = useRoute();
</script>

<template>
    <div class="frame">
        <div class="frame__title">
            <NuxtLink to="/">D — S</NuxtLink> {{ route.path }}
        </div>
        <div class="frame__nav">
            <PageNavbar />
        </div>
        <div class="frame__designl">David Schubert — Hawaii Studio</div>
        <div class="frame__designr">
            <WidgetTimedisplay />
        </div>
        <div class="frame__copyright">© Code by David</div>
        <div class="frame__social">
            <PageFrameSocial>Get in touch</PageFrameSocial>
        </div>
    </div>
</template>

<style scoped>
/* Frame CSS */
.frame {
    z-index: 1000;
    width: 100%;
    max-width: none;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr;
    grid-template-areas:
        "title"
        "nav"
        "designl"
        "designr"
        "copyright"
        "social";
    align-content: space-between;
    padding: 1rem 2.5rem 1rem 2.5rem;
    display: grid;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    mix-blend-mode: difference;
}

.frame {
    height: 100vh;
    grid-template:
        "title nav"
        "designl designr"
        /*". ." 1fr*/
        "copyright social" / auto 1fr;
}

.frame__title,
.frame__nav,
.frame__copyright,
.frame__social {
    pointer-events: auto;
    margin: 0.5rem;
    white-space: nowrap;
}

/* Frame Bestandteile */
.frame__title {
    grid-area: title;
}

.frame__nav {
    grid-area: nav;
    justify-self: end;
}

.frame__designl {
    grid-area: designl;
    justify-self: start;
    writing-mode: vertical-lr;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2.5px;
    line-height: 12px;
    transform: rotate(180deg);
}

.frame__designr {
    grid-area: designr;
    justify-self: end;
    writing-mode: vertical-rl;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2.5px;
    line-height: 12px;
    transform: rotate(180deg);
}

.frame__copyright {
    grid-area: copyright;
    justify-self: start;
}

.frame__social {
    grid-area: social;
    justify-self: end;
}

/* Link */
.frame__title a {
    color: #f1f1f1;
    text-decoration: none;
    text-transform: lowercase;
}

.frame__title a:hover {
    color: white;
}

.frame__title a.router-link-active {
    color: white;
    cursor: default;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
}</style>
