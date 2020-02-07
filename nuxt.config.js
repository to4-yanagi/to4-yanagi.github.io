import getConfigForKeys from './config.js'

const ctfConfig = getConfigForKeys([
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])

export default {
  head: {
    title: "Yanagi's portfolio",
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Yanagi's portfolio" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'description', name: 'description', content: 'フリーランスエンジニアyanagiのポートフォリオサイトです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: "Yanagi's portfolio" },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://laughcraft.dev/' },
      { hid: 'og:title', property: 'og:title', content: "Yanagi's portfolio" },
      { hid: 'og:description', property: 'og:description', content: 'フリーランスエンジニアyanagiのポートフォリオサイトです。' },
      { hid: 'og:image', property: 'og:image', content: '/ogp.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
      { hid: 'twitter:player', property: 'twitter:player', content: '@to4_yanagi' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '2295468084049542' }
    ]
  },
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~plugins/vue-lazyload', ssr: false },
  ],
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
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
  }
}