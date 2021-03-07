<template>
    <div class="rounded bg-gray-100 mt-6">
        <p
            :class="[
                'text-sm',
                'capitalize',
                'px-4',
                'py-2',
                'mb-0',
                'rounded-t',
                'text-white',
                this.adtypes[this.type].bgColor
            ]"
        >
            <i :class="this.adtypes[this.type].icon"></i>
            <span class="ml-1 font-bold">{{ type }}</span>
        </p>
        <div
            :class="['px-4', 'pt-1', 'pb-2', 'text-sm']"
            id="admonition-content"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "common"
        },
        content: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            adtypes: {
                info: {
                    bgColor: "bg-blue-400",
                    icon: "fas fa-info-circle"
                },
                tip: {
                    bgColor: "bg-pink-400",
                    icon: "fas fa-fire"
                },
                success: {
                    bgColor: "bg-green-400",
                    icon: "fas fa-check-circle"
                },
                warn: {
                    bgColor: "bg-yellow-400",
                    icon: "fas fa-fire"
                },
                danger: {
                    bgColor: "bg-red-600",
                    icon: "fas fa-times-circle"
                },
                common: {
                    bgColor: "bg-purple-600",
                    icon: "fas fa-bolt"
                }
            }
        };
    }
};
</script>

<style>
#admonition-content > * {
    @apply text-base !important;
}
</style>
