import { defineConfig } from "vitepress"
import locales from "./locales"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Kasumi.js",
    description: "A KOOK bot framework in TypeScript",
    locales: locales(),
    head: [["script", { src: "/_vercel/insights/script.js", defer: "" }]],
    themeConfig: {
        socialLinks: [
            { icon: "github", link: "https://github.com/HexaNona/kasumi" },
            { icon: "twitter", link: "https://twitter.com/saltcutep" },
        ],

        editLink: {
            pattern: "https://github.com/saltcute/kasumi-doc/edit/main/:path",
        },
    },
})
