import { DefaultTheme, LocaleConfig } from "vitepress";

const enCA: LocaleConfig<DefaultTheme.Config>[string] = {
    label: 'English (Canada)',
    lang: 'en-ca',
    link: '/en-ca/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/en-ca/' },
            { text: 'Quick Start', link: '/en-ca/introduction/what-is-kasumi' }
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'What is Kasumi.js?', link: '/en-ca/introduction/what-is-kasumi' },
                    { text: 'Getting Started', link: '/en-ca/introduction/getting-started' }
                ]
            },
            {
                text: 'Get Responses',
                items: [
                    { text: 'Command', link: '/en-ca/responses/command' },
                    { text: 'Menu', link: '/en-ca/responses/menu' },
                    { text: 'Plugin', link: '/en-ca/responses/plugin' },
                    { text: 'Events', link: '/en-ca/responses/event' },
                    { text: 'You Did It!', link: '/en-ca/responses/you-did-it' }
                ]
            },
            {
                text: 'Menu & Command',
                items: [
                    { text: 'Session', link: '/en-ca/menu-command/session' },
                    { text: 'Card', link: '/en-ca/menu-command/card' },
                    { text: 'Middleware', link: '/en-ca/menu-command/middleware' },
                    { text: 'Event Callback', link: '/en-ca/menu-command/event-callback' }
                ]
            },
            {
                text: 'Config & Storage',
                items: [
                    { text: 'Overview', link: '/en-ca/config-storage/overview' },
                    { text: 'Custom Storage', link: '/en-ca/config-storage/custom-storage' }
                ]
            },
            {
                text: 'API Reference',
                items: [
                    { text: 'Overview', link: '/en-ca/api/overview' },
                    { text: 'Guild', link: '/en-ca/api/guild' },
                    { text: 'Channel', link: '/en-ca/api/channel' },
                    { text: 'User', link: '/en-ca/api/user' },
                    { text: 'Message', link: '/en-ca/api/message' },
                    { text: 'Direct Message', link: '/en-ca/api/directMessage' },
                    { text: 'Asset', link: '/en-ca/api/asset' },
                    { text: 'Badge', link: '/en-ca/api/badge' },
                    { text: 'Blacklist', link: '/en-ca/api/blacklist' },
                    { text: 'Game', link: '/en-ca/api/game' },
                    { text: 'Gateway', link: '/en-ca/api/gateway' },
                    { text: 'Intimacy', link: '/en-ca/api/intimacy' },
                    { text: 'Invite', link: '/en-ca/api/invite' }
                ]
            }
        ]
    }
}

export default enCA;