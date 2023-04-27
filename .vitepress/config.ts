import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kasumi.js",
  description: "A KOOK bot framework in TypeScript",
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
          { text: 'Events', link: '/responses/event' },
          { text: 'You Did It!', link: '/responses/you-did-it' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hexona69/kasumi' },
      { icon: 'twitter', link: 'https://twitter.com/hexona_ch' }
    ]
  }
})
