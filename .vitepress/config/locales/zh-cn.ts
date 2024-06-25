import { DefaultTheme, LocaleConfig } from "vitepress";

const zhCN: LocaleConfig<DefaultTheme.Config>[string] = {
    label: '简体中文（中国）',
    lang: 'zh-cn',
    link: '/zh-cn/',
    themeConfig: {
        nav: [
            { text: '主页', link: '/zh-cn/' },
            { text: '快速开始', link: '/zh-cn/introduction/what-is-kasumi' }
        ],

        sidebar: [
            {
                text: '介绍',
                items: [
                    { text: '什么是 Kasumi.js？', link: '/zh-cn/introduction/what-is-kasumi' },
                    { text: '快速开始', link: '/zh-cn/introduction/getting-started' }
                ]
            },
            {
                text: '获取回应',
                items: [
                    { text: '命令', link: '/zh-cn/responses/command' },
                    { text: '菜单', link: '/zh-cn/responses/menu' },
                    { text: '插件', link: '/zh-cn/responses/plugin' },
                    { text: '事件', link: '/zh-cn/responses/event' },
                    { text: '你做到了！', link: '/zh-cn/responses/you-did-it' }
                ]
            },
            {
                text: '菜单与命令',
                items: [
                    { text: '会话', link: '/zh-cn/menu-command/session' },
                    { text: '卡片', link: '/zh-cn/menu-command/card' },
                    { text: '中间件', link: '/zh-cn/menu-command/middleware' },
                    { text: '事件回调', link: '/zh-cn/menu-command/event-callback' }
                ]
            },
            {
                text: '配置与存储',
                items: [
                    { text: '概览', link: '/zh-cn/config-storage/overview' },
                    { text: '自定义存储', link: '/zh-cn/config-storage/custom-storage' }
                ]
            },
            {
                text: 'API 参考',
                items: [
                    { text: '概览', link: '/zh-cn/api/overview' },
                    { text: '服务器', link: '/zh-cn/api/guild' },
                    { text: '频道', link: '/zh-cn/api/channel' },
                    { text: '用户', link: '/zh-cn/api/user' },
                    { text: '消息', link: '/zh-cn/api/message' },
                    { text: '私聊消息', link: '/zh-cn/api/directMessage' },
                    { text: '资产', link: '/zh-cn/api/asset' },
                    { text: '徽章', link: '/zh-cn/api/badge' },
                    { text: '黑名单', link: '/zh-cn/api/blacklist' },
                    { text: '游戏动态', link: '/zh-cn/api/game' },
                    { text: '网关', link: '/zh-cn/api/gateway' },
                    { text: '亲密度', link: '/zh-cn/api/intimacy' },
                    { text: '邀请', link: '/zh-cn/api/invite' }
                ]
            }
        ],
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        footer: {
            message: '在 MIT 授权 下发布',
            copyright: `© 2023-${new Date().getFullYear()} saltcute`
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
}

export default zhCN;