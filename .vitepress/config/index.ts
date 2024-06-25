import { defineConfig } from 'vitepress'
import enUS from './locales/en-us'
import enCA from './locales/en-ca'
import zhCN from './locales/zh-cn'
import zhTW from './locales/zh-tw'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Kasumi.js",
    description: "A KOOK bot framework in TypeScript",
    locales: {
        "en-us": enUS,
        "en-ca": enCA,
        "zh-cn": zhCN,
        "zh-tw": zhTW
    },
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/HexaNona/kasumi' },
            { icon: 'twitter', link: 'https://twitter.com/saltcutep' }
        ],

        editLink: {
            pattern: 'https://github.com/saltcute/kasumi-doc/edit/main/:path'
        }
    }
})
