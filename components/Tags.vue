<template>
    <div v-if="tags && tags.length" class="text-sm flex flex-wrap">
        <span
            :class="getTagClassNames(tag)"
            id="tags-tag"
            v-for="(tag, i) in tags"
            :key="i"
            >{{ tag }}</span
        >
    </div>
</template>

<script>
export default {
    props: ["tags"],
    methods: {
        getTagClassNames(tag) {
            const classes = ["rounded", "px-1", "capitalize", "text-sm"];
            const tagConf =
                this.$siteConfig.tags[tag] || this.$siteConfig.tags.default;

            classes.push(`bg-${tagConf.bgColor}`);
            classes.push(`text-${tagConf.textColor || "white"}`);
            return classes;
        }
    }
};
</script>

<style scoped>
#tags-tag {
    margin: 2px 3px;
}

#tags-tag:first-child {
    margin-left: 0;
}

#tags-tag:last-child {
    margin-right: 0;
}
</style>
