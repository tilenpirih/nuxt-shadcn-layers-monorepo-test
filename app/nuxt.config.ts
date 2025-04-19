// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon'],
  extends: ['../ui'],
  // shadcn: {
  //   prefix: 'Ui',
  //   componentDir: './components/ui'
  // },
  // css: ['~/assets/css/tailwind.css'],

})