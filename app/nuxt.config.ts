// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', 'shadcn-nuxt'],
  extends: ['../ui'],
  css: ['~/assets/css/tailwind.css'],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  // css: ['~/assets/css/tailwind.css'],

})