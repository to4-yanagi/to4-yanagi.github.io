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
import Card from '@/components/card'
import MainVisual from '@/components/MainVisual'
import createClient from '@/plugins/contentful'

export default {
  transition: 'slide-left',
  head () {
    return {
      title: "yanagi's portfolio",
      meta: [
        { hid: 'description', name: 'description', content: "yanagi's portfolio" }
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