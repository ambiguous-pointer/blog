import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-cn",
  base: "/blog",
  title: "小意的博客",
  description: "A VitePress Site 记录了 小意的所见所闻所感",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // siteTitle: '小意的博客',
    siteTitle: false,
    logo: '/images.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'gitee', link: 'https://gitee.com/' },
      { text: 'Q&A', link: '/web_links' },
      {
        text: 'Projects',
        items: [
          { text: '航空购票系统', link: '/item-1' },
          { text: '重庆东方圣达保洁系统', link: 'http://cqdfsd.com/' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    editLink: {
      pattern: 'xxx/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License. Power By VitePress',
      copyright: 'Copyright © 2024-present'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
