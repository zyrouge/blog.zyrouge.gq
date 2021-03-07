const fs = require("fs");

exports.onCreatePages = function () {
    const posts = [...this.pages.values()]
        .filter(page => page.type === "post" && !page.draft)
        .sort((a, b) => {
            return a.createdAt > b.createdAt ? 1 : -1
        });

    const selectFields = page => (page && {
        title: page.title,
        permalink: page.permalink
    });

    for (const [index, post] of posts.entries()) {
        post.prevPost = selectFields(posts[index - 1]);
        post.nextPost = selectFields(posts[index + 1]);

        let author;
        if (this.config.siteConfig.authors[post.author]) {
            author = this.config.siteConfig.authors[post.author];
            author.name = post.author;
        } else {
            author = this.config.siteConfig.authors[this.config.siteConfig.author];
            author.name = this.config.siteConfig.author;
        }
        post.authorInfo = author;
    }

    writeStaticAPI({
        posts,
        base: this.config.siteConfig.url
    });
}

function writeStaticAPI(opts) {
    const selectSearchFields = ({
        title,
        permalink,
        type,
        createdAt,
        updatedAt,
        excerpt,
        tags,
        authorInfo
    }) => ({
        title,
        type,
        createdAt: createdAt.getTime(),
        updatedAt: updatedAt.getTime(),
        excerpt,
        tags,
        permalink,
        authorInfo
    });

    const pages = {
        baseURL: opts.base,
        pages: opts.posts.map(x => selectSearchFields(x)),
        producedAt: Date.now()
    };

    fs.writeFileSync("./static/pages.json", JSON.stringify(pages, null, 2));
}