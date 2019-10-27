import createClient from './plugins/contentful'
import getConfigForKeys from './config.js'

interface MyIterface1 {
  module: {
    rules: object[]
  }
}

interface MyIterface2 {
  isDev: boolean,
  isClient: boolean
}

interface MyIterface3 {
  items: Array<{
    fields: {
      slug: string
    }
  }>;
}

const ctfConfig = getConfigForKeys([
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_POST_TYPE_ID'
])

export default {
  head: {
    title: 'my_portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my_portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  buildModules: ['@nuxt/typescript-build'],
  build: {
    extend (config: MyIterface1, { isDev, isClient }: MyIterface2) {
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
  generate: {
    dir: 'docs',
    routes() {
      return createClient(ctfConfig)
        .getEntries(ctfConfig.CTF_POST_TYPE_ID)
        .then((entries: MyIterface3) => {
          return [...entries.items.map(entry => `/blog/${entry.fields.slug}`)]
        })
    }
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_POST_TYPE_ID: ctfConfig.CTF_POST_TYPE_ID
  }
}
