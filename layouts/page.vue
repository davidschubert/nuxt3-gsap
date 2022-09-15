<template>
    <div>
        <slot name="header">
            <PageNavbar />
        </slot>
        <div id="wrapper">
            <section id="content">
                <slot />
            </section>
        </div>
        <slot name="footer">
            <PageFooter />
        </slot>
    </div>
</template>
