// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: '稀土掘金',
      meta: [
        // <meta name="description" content="My amazing site">
        // { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
  css: ['@/assets/css/normalize.css'],
  components: {
    dirs: [
      '~/components'
    ]
  },
})
