module.exports = {
    purge: [
        ...["assets", "components", "layouts", "pages"].map(x => `./${x}/**/*`)
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: "Montserrat, sans-serif",
                mono: "Fira Code, monospace"
            }
        },
    }
}