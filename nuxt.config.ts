// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'github_pages',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ethan Pidgeon | Front-End Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Ethan Pidgeon — Front-End Developer based in Exeter with a passion for all things technology. Skilled in HTML, CSS, JavaScript, Vue.js, PHP, and more.',
        },
        { property: 'og:title', content: 'Ethan Pidgeon | Front-End Developer' },
        {
          property: 'og:description',
          content:
            'Front-End Developer based in Exeter with a passion for all things technology.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ethanpidge.github.io' },
        { name: 'theme-color', content: '#264653' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },
})
