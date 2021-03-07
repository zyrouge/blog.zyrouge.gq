<template>
    <div>
        <NavBar />
        <div class="box py-0 pt-4 pb-0">
            <h1>{{ page.title }}</h1>
            <div class="flex flex-row items-center mb-2">
                <img
                    :src="page.authorInfo.image"
                    :alt="`${page.authorInfo.name}'s Image`"
                    class="rounded-full"
                    style="width: 30px; height: auto;"
                />
                <p class="ml-2 text-sm">
                    <span class="font-bold">{{ page.authorInfo.name }}</span>
                    on
                    <span class="font-bold">{{
                        formatDate(page.createdAt)
                    }}</span>
                    <span class="font-bold" v-if="page.updatedAt"
                        >(Last updated: {{ formatDate(page.updatedAt) }})</span
                    >
                </p>
            </div>
            <Tags :tags="page.tags" />
            <hr />
            <div>
                <h3>On this page</h3>
                <ul class="list-disc list-inside ml-2">
                    <li
                        class="mt-0 mb-0"
                        v-for="head in page.markdownHeadings"
                        :key="head.slug"
                    >
                        <a class="font-bold" :href="`#${head.slug}`">{{
                            head.text
                        }}</a>
                    </li>
                </ul>
            </div>
            <hr />
            <article>
                <slot name="default" />
            </article>
        </div>
        <PrevNextPost
            :prevPost="page && page.prevPost"
            :nextPost="page && page.nextPost"
        />
        <Footer />
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Tags from "../components/Tags.vue";
import PrevNextPost from "../components/PrevNextPost.vue";

export default {
    props: ["page"],
    components: {
        NavBar,
        Tags,
        PrevNextPost,
        Footer
    },
    head() {
        return {
            title: `${this.page.title} - ${this.$siteConfig.title}`,
            meta: [
                {
                    name: "description",
                    content: this.page.excerpt
                },
                {
                    property: "og:title",
                    content: this.page.title
                },
                {
                    property: "og:description",
                    content: this.page.excerpt
                },
                {
                    property: "og:type",
                    content: "article"
                },
                {
                    property: "og:url",
                    content: `${this.$siteConfig.url}${this.page.permalink}`
                }
            ]
        };
    },
    methods: {
        formatDate(date) {
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
            return `${
                months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`;
        }
    }
};
</script>
