import { DefaultTheme, LocaleConfig } from "vitepress";

const zhTW: LocaleConfig<DefaultTheme.Config>[string] = {
    label: '繁體中文（台灣）',
    lang: 'zh-tw',
    link: '/zh-tw/',
    themeConfig: {
        nav: [
            { text: '主頁', link: '/zh-tw/' },
            { text: '快速開始', link: '/zh-tw/introduction/what-is-kasumi' }
        ],

        sidebar: [
            {
                text: '介紹',
                items: [
                    { text: '什麼是 Kasumi.js？', link: '/zh-tw/introduction/what-is-kasumi' },
                    { text: '快速開始', link: '/zh-tw/introduction/getting-started' }
                ]
            },
            {
                text: '獲取回應',
                items: [
                    { text: '指令', link: '/zh-tw/responses/command' },
                    { text: '菜單', link: '/zh-tw/responses/menu' },
                    { text: '擴充功能', link: '/zh-tw/responses/plugin' },
                    { text: '事件', link: '/zh-tw/responses/event' },
                    { text: '你做到了！', link: '/zh-tw/responses/you-did-it' }
                ]
            },
            {
                text: '菜單與指令',
                items: [
                    { text: '會話', link: '/zh-tw/menu-command/session' },
                    { text: '卡片', link: '/zh-tw/menu-command/card' },
                    { text: '中間件', link: '/zh-tw/menu-command/middleware' },
                    { text: '事件回調', link: '/zh-tw/menu-command/event-callback' }
                ]
            },
            {
                text: '配置與儲存',
                items: [
                    { text: '概覽', link: '/zh-tw/config-storage/overview' },
                    { text: '客製化儲存', link: '/zh-tw/config-storage/custom-storage' }
                ]
            },
            {
                text: 'API 參考',
                items: [
                    { text: '概覽', link: '/zh-tw/api/overview' },
                    { text: '伺服器', link: '/zh-tw/api/guild' },
                    { text: '頻道', link: '/zh-tw/api/channel' },
                    { text: '使用者', link: '/zh-tw/api/user' },
                    { text: '訊息', link: '/zh-tw/api/message' },
                    { text: '私人訊息', link: '/zh-tw/api/directMessage' },
                    { text: '資產', link: '/zh-tw/api/asset' },
                    { text: '徽章', link: '/zh-tw/api/badge' },
                    { text: '黑名單', link: '/zh-tw/api/blacklist' },
                    { text: '遊戲狀態', link: '/zh-tw/api/game' },
                    { text: '閘道器', link: '/zh-tw/api/gateway' },
                    { text: '親密度', link: '/zh-tw/api/intimacy' },
                    { text: '邀請', link: '/zh-tw/api/invite' }
                ]
            }
        ],
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: '在 GitHub 上編輯這個頁面'
        },

        footer: {
            message: '在 MIT 授權 下釋出',
            copyright: `© 2023-${new Date().getFullYear()} saltcute`
        },

        docFooter: {
            prev: '上頁',
            next: '下頁'
        },

        outline: {
            label: '頁面導覽'
        },

        lastUpdated: {
            text: '最後更新於',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多語言',
        returnToTopLabel: '回到頂部',
        sidebarMenuLabel: '菜單',
        darkModeSwitchLabel: '主題',
        lightModeSwitchTitle: '切換到淺色模式',
        darkModeSwitchTitle: '切換到深色模式'
    }
}

export default zhTW;