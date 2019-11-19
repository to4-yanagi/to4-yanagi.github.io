import createClient from './plugins/contentful'
import getConfigForKeys from './config.js'

const ctfConfig = getConfigForKeys([
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/<repository-name>/'
  }
} : {}

export default {
  head: {
    title: 'my_portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my_portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '@/assets/img/favicon.png' }
    ]
  },
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources'
  ],
  css: [
    { src: '@/assets/scss/_styles.scss' }
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_reset.scss',
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_markdown.scss'
    ]
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  routerBase,
  // generate: {
  //   routes() {
  //     return createClient(ctfConfig)
  //       .getEntries('post')
  //       .then(entries => {
  //         return [...entries.items.map(entry => `/blog/${entry.fields.slug}`)]
  //       })
  //   }
  // },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
  }
}