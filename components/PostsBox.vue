<template>
    <div v-if="posts && posts.length">
        <hr v-if="hr" />
        <h1>All posts</h1>
        <div
            class="flex flex-col md:flex-row items-center justify-between"
            v-for="posts in getChunkedPosts()"
            :key="posts.permalink"
        >
            <a
                class="rounded my-2 px-4 py-2 border-2 border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 hover:no-underline"
                id="post-box"
                v-for="post in posts"
                :key="post.permalink"
                :href="post.permalink"
            >
                <p class="mb-0 text-xs">
                    On
                    <span class="font-bold">{{
                        formatDate(post.updatedAt || post.createdAt)
                    }}</span>
                </p>
                <p class="my-0 text-indigo-600 font-bold">{{ post.title }}</p>
                <p class="mt-0 text-sm" v-if="post.excerpt">
                    {{ post.excerpt }}
                </p>
                <Tags class="mb-2" :tags="post.tags" />
            </a>
        </div>
    </div>
</template>

<script>
import chunk from "lodash/chunk";
import Tags from "./Tags.vue";

export default {
    props: {
        hr: {
            type: Boolean,
            default: true
        },
        posts: {
            type: Array,
            default: []
        }
    },
    components: {
        Tags
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
        },
        getChunkedPosts() {
            return chunk(
                this.posts.filter(x => x.type === "post"),
                3
            );
        }
    }
};
</script>

<style scoped>
#post-box {
    width: 32%;
}

@media screen and (max-width: 760px) {
    #post-box {
        width: 100%;
    }
}
</style>
