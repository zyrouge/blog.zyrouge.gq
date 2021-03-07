<template>
    <div>
        <div
            class="bg-indigo-600 text-white shadow px-6 py-4 flex flex-row items-center justify-around"
        >
            <div class="flex flex-row justify-center items-center">
                <a href="/">
                    <img
                        src="../assets/images/logo.png"
                        alt="Logo"
                        class="mr-4"
                        style="width: 30px; height: auto;"
                /></a>
                <div class="flex flex-row">
                    <a
                        class="text-white hover:text-gray-200 font-bold ml-2"
                        v-for="link in links"
                        :key="link.name"
                        :href="link.url"
                        >{{ link.name }}</a
                    >
                </div>
            </div>
            <div>
                <button
                    class="bg-white text-indigo-600 hover:bg-gray-200 shadow rounded-full font-bold px-2 py-1 text-sm transition-colors duration-200"
                    @click="toggleSearch()"
                >
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
        <div
            class="bg-gray-900 bg-opacity-50"
            id="search-box"
            @click.self="toggleSearch()"
        >
            <div
                class="bg-white shadow-2xl rounded-lg px-6 py-4"
                id="search-content"
            >
                <div class="flex flex-row justify-center items-center">
                    <input
                        class="flex-grow shadow border-2 border-indigo-600 rounded px-3 py-2 mr-3 text-black"
                        type="text"
                        name="search"
                        placeholder="Search..."
                        autocomplete="off"
                        v-model="searchText"
                    />
                    <button
                        class="text-xl shadow rounded bg-indigo-600 text-white px-4 py-2"
                        @click="toggleSearch()"
                    >
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <p class="mt-5 text-center" v-if="results.length === 0">
                    <span v-if="searchText.length === 0"
                        >Type something to view results...</span
                    >
                    <span v-else>No results were found 😟</span>
                </p>
                <div
                    class="overflow-y-auto mt-4"
                    style="height: calc(100% - 70px);"
                    v-else
                >
                    <div
                        v-for="{ refIndex, item: post } of results"
                        :key="refIndex"
                    >
                        <a
                            class="bg-gray-50 border border-indigo-200 hover:bg-indigo-100 rounded-md mb-3 mr-2 px-3 py-2 block"
                            :href="post.permalink"
                        >
                            <div class="text-xs capitalize">
                                {{ post.tags.join(", ") }}
                            </div>
                            <h3 class="mt-0 mb-0">{{ post.title }}</h3>
                            <p class="mt-0 mb-0 text-sm">{{ post.excerpt }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Fuse from "fuse.js";

export default {
    data() {
        return {
            links: [
                {
                    name: "Home",
                    url: "/"
                },
                {
                    name: "Discord",
                    url: "https://zyrouge.gq/discord"
                }
            ],
            searchText: "",
            pages: [],
            fuse: null,
            results: []
        };
    },
    methods: {
        async getPages() {
            const res = await fetch("/pages.json");
            const json = await res.json();
            this.pages = json.pages;
            this.fuse = new Fuse(this.pages, {
                includeScore: true,
                keys: ["title", "type", "excerpt", "tags", "permalink"]
            });
        },
        async updateResults() {
            if (!this.searchText.length) {
                this.results = [];
                return;
            }
            if (!this.fuse) await this.getPages();
            this.results = this.fuse
                .search(this.searchText)
                .sort((a, b) => a.score - b.score);
        },
        toggleSearch() {
            const overlay = document.getElementById("search-box");
            const active = "flex",
                hid = "none";
            if (overlay.style.display === active) overlay.style.display = hid;
            else overlay.style.display = active;
        }
    },
    watch: {
        searchText() {
            this.updateResults();
        }
    }
};
</script>

<style>
#search-box {
    display: none;
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

#search-content {
    height: 80%;
    width: 80%;
    margin: auto auto;
}
</style>
