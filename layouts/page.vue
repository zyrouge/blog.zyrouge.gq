<template>
    <div>
        <NavBar />
        <div class="box">
            <slot name="default" />
        </div>
        <Footer />
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
    props: ["page"],
    components: {
        NavBar,
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
                    property: "og:url",
                    content: `${this.$siteConfig.url}${this.page.permalink}`
                }
            ]
        };
    }
};
</script>

<style scoped>
#post-box {
    width: 100%;
}

@media screen and (min-width: 768px) {
    #post-box {
        width: 33%;
    }
}
</style>
