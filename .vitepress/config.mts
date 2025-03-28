import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  base:'/appweb-exer16/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Qualité du code', link: '/emil-bedard' },
      { text: 'Fonctionnalité', link: '/emil-bedard2' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Qualité du code', link: '/emil-bedard' },
          { text: 'Fonctionnalité', link: '/emil-bedard2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
