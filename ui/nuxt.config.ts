
// import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    // "shadcn-nuxt",
  ],
  css: [
    join(currentDir, './assets/css/tailwind.css'),
  ],
  alias: {
    '~': currentDir,
  },
  // shadcn: {
  //   prefix: 'Ui',
  //   componentDir: './components/ui'
  // },
  // tailwindcss: {
  //   cssPath: join(currentDir, './assets/css/tailwind.css'),

  // },
  // components: [
  //   {
  //     path: join(currentDir, './components'),
  //     // this is required else Nuxt will autoImport `.ts` file
  //     extensions: ['.vue'],
  //   },
  //   {
  //     path: join(currentDir, './components/ui'),
  //     // this is required else Nuxt will autoImport `.ts` file
  //     extensions: ['.vue'],
  //     prefix: 'Ui',
  //   },
  // ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})