<script setup>
definePageMeta({
    // set custom layout
    //layout: "default",
    //layoutTransition: true,
    //pageTransition: true,
});

// SEO and Meta
useHead({
    title: "Home | David Schubert — UI/UX Designer",
    meta: [{ name: "description", content: "My amazing homepage." }],
});

onMounted(() => {
    console.log("%c Enter Index", "background: #000; color: #fff");
});

onBeforeRouteLeave(() => {
    console.log("%c Exit Index", "background: #000; color: #fff");
});
</script>

<template>
    <GsapScrollsmoother :settings="'2'">
        <div class="wrapper-home">
            <WidgetVideoheader />
            <div class="home">
                <h1>Home</h1>
                <AppAlert>This is an auto-imported component.</AppAlert>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
                <div class="project-card">
                    <img
                        class="project-image"
                        src="https://source.unsplash.com/WLUHO9A_xik/600x500"
                    />
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae molestias officia delectus! Excepturi, reiciendis sed
                    totam aliquam incidunt asperiores dolore odio quos ducimus
                    consectetur enim nostrum dignissimos ex porro numquam sint
                    maiores ipsum eum maxime nisi sunt? Nisi iusto commodi non
                    voluptas fugit veniam voluptatibus, rem voluptatem. Sed vel
                    nesciunt neque magni aspernatur officia ex officiis at?
                    Facere, cumque provident?
                </p>
            </div>
            <PageFooter />
        </div>
    </GsapScrollsmoother>
</template>

<style scoped>
.wrapper-home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0;
    background-color: rgba(5, 80, 55, 0.1);
}
.home {
    width: 62%;
    text-align: center;
    padding: 160px 0 160px 0;
}

.project-card {
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #0cc462;
    transition: all 0.3s ease;
    cursor: pointer;
}

.project-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
