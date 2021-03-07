const fs = require("fs");
const path = require("path");

const config = {
    deletables: [
        ".github",
        ".saber",
        ".vscode",
        "assets",
        "components",
        "layouts",
        "node_modules",
        "pages",
        "static",
        ".gitignore",
        ".prettierignore",
        ".prettierrc",
        "package-lock.json",
        "package.json",
        "postcss.config.js",
        "README.md",
        "saber-browser.js",
        "saber-config.yml",
        "saber-node.js",
        "tailwind.config.js"
    ].map(x => path.join(__dirname, x)),
    gitignore: [
        "scripts"
    ].join("\n")
}

const start = () => {
    console.log("Starting cleanup");
    for (const file of config.deletables) {
        fs.unlinkSync(file);
        console.log(`Deleted ${file}`);
    }

    fs.writeFileSync(".gitignore", config.gitignore);
    console.log("Generated new gitignore");
}

start();