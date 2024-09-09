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
        <div
            class="flex flex-col items-center justify-center min-h-screen p-0 bg-[rgba(5,80,55,0.1)]"
        >
            <WidgetVideoheader />
            <div class="w-[62%] text-center py-40">
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
                <div
                    class="w-[300px] h-[250px] flex flex-col items-center justify-center relative overflow-hidden rounded-lg shadow-lg bg-[#0cc462] transition-all duration-300 ease-in-out cursor-pointer"
                >
                    <img
                        class="w-full h-full absolute top-0 left-0 z-10 bg-cover bg-center bg-no-repeat"
                        src="/img/smooth/neon3.jpg"
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
