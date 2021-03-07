<template>
    <div>
        <h1>Hello 👋 everyone, welcome to my blog!</h1>
        <h4>Enjoy your stay!</h4>
        <PostsBox
            v-if="page && page.posts && page.posts.reverse()"
            :posts="page.posts"
        />
    </div>
</template>

<script>
import PostsBox from "../components/PostsBox.vue";

export const data = {
    title: "Home",
    layout: "page",
    injectAllPosts: true
};

export default {
    props: ["page"],
    components: {
        PostsBox
    }
};
</script>
