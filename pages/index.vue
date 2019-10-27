<template>
  <section class="index">
    <card
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
import Card from '~/components/card.vue'
import createClient from '~/plugins/contentful.js'

export default {
  transition: 'slide-left',
  components: {
    Card
  },
  asyncData({ env, params }) {
    return createClient()
      .getEntries(env.CTF_POST_TYPE_ID)
      .then(entries => {
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
  }
}
</script>