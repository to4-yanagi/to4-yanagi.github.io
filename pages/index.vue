<template>
  <section class="index">
    <MainVisual />
    <Card
      v-for="(post, i) in posts"
      :key="i"
      :title="post.fields.title"
      :id="post.sys.id"
      :date="post.sys.updatedAt"
      :slug="post.fields.slug"
    />
  </section>
</template>

<script>
import Mixin from '@/static/mixin'
import Card from '@/components/card'
import MainVisual from '@/components/MainVisual'
import createClient from '@/plugins/contentful'

export default {
  mixins: [Mixin],
  head () {
    return {
      title: this.siteTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.siteTitle }
      ]
    }
  },
  components: {
    Card,
    MainVisual
  },
  asyncData({ env, params }) {
    return createClient()
      .getEntries('post')
      .then(entries => {
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
  }
}
</script>