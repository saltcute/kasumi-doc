import { DefaultTheme, LocaleConfig } from "vitepress";

const enCA: LocaleConfig<DefaultTheme.Config>[string] = {
    label: 'English (Canada)',
    lang: 'en-ca',
    link: '/en-ca',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Quick Start', link: '/introduction/what-is-kasumi' }
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'What is Kasumi.js?', link: '/introduction/what-is-kasumi' },
                    { text: 'Getting Started', link: '/introduction/getting-started' }
                ]
            },
            {
                text: 'Get Responses',
                items: [
                    { text: 'Command', link: '/responses/command' },
                    { text: 'Menu', link: '/responses/menu' },
                    { text: 'Plugin', link: '/responses/plugin' },
                    { text: 'Events', link: '/responses/event' },
                    { text: 'You Did It!', link: '/responses/you-did-it' }
                ]
            },
            {
                text: 'Menu & Command',
                items: [
                    { text: 'Session', link: '/menu-command/session' },
                    { text: 'Card', link: '/menu-command/card' },
                    { text: 'Middleware', link: '/menu-command/middleware' },
                    { text: 'Event Callback', link: '/menu-command/event-callback' }
                ]
            },
            {
                text: 'Config & Storage',
                items: [
                    { text: 'Overview', link: '/config-storage/overview' },
                    { text: 'Custom Storage', link: '/config-storage/custom-storage' }
                ]
            },
            {
                text: 'API Reference',
                items: [
                    { text: 'Overview', link: '/api/overview' },
                    { text: 'Guild', link: '/api/guild' },
                    { text: 'Channel', link: '/api/channel' },
                    { text: 'User', link: '/api/user' },
                    { text: 'Message', link: '/api/message' },
                    { text: 'Direct Message', link: '/api/directMessage' },
                    { text: 'Asset', link: '/api/asset' },
                    { text: 'Badge', link: '/api/badge' },
                    { text: 'Blacklist', link: '/api/blacklist' },
                    { text: 'Game', link: '/api/game' },
                    { text: 'Gateway', link: '/api/gateway' },
                    { text: 'Intimacy', link: '/api/intimacy' },
                    { text: 'Invite', link: '/api/invite' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/HexaNona/kasumi' },
            { icon: 'twitter', link: 'https://twitter.com/saltcutep' }
        ],

        editLink: {
            pattern: 'https://github.com/saltcute/kasumi-doc/edit/main/:path'
        }
    }
}

export default enCA;