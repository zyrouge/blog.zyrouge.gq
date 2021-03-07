<template>
    <div class="box pt-0 md:pt-0">
        <hr v-if="hr" />
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div
                :class="getClassNames(post.pn)"
                id="prev-next-box"
                v-for="post in getPosts()"
                :key="post.permalink"
            >
                <span :class="getIconClassNames(post.pn)">
                    <i v-if="post.pn === 0" class="fas fa-arrow-left"></i>
                </span>
                <router-link class="flex-grow" :to="post.permalink">
                    <p class="text-sm">
                        {{ post.pn === 0 ? "Previous" : "Next" }}
                    </p>
                    <h3 class="mt-0">{{ post.title }}</h3>
                </router-link>
                <span :class="getIconClassNames(post.pn)"
                    ><i v-if="post.pn === 1" class="fas fa-arrow-right"></i
                ></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        hr: {
            type: Boolean,
            default: true
        },
        prevPost: {
            type: Object,
            default: null
        },
        nextPost: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            classNames:
                "flex flex-row rounded my-2 px-4 py-2 border-2 border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 hover:no-underline flex-grow w-full md:w-auto",
            iconClassNames:
                "flex justify-center items-center text-indigo-600 text-2xl"
        };
    },
    methods: {
        getClassNames(pn) {
            return `${this.classNames} text-${
                pn === 0 ? "left" : "right"
            } md:m${pn === 0 ? "r" : "l"}-1`;
        },
        getIconClassNames(pn) {
            return `${this.iconClassNames} m${pn === 0 ? "r" : "l"}-4`;
        },
        getPosts() {
            const posts = [];
            if (this.prevPost)
                posts.push({
                    ...this.prevPost,
                    pn: 0
                });
            if (this.nextPost)
                posts.push({
                    ...this.nextPost,
                    pn: 1
                });
            return posts;
        }
    }
};
</script>
