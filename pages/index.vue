<template>
  <section class="index">
    <MainVisual />
    <Profile />
    <Ability />
    <Project :projects="projects" />
    <Skills />
    <Contact />
    <!-- <Card
      v-for="(post, i) in posts"
      :key="i"
      :title="post.fields.title"
      :id="post.sys.id"
      :date="post.sys.updatedAt"
      :slug="post.fields.slug"
    /> -->
  </section>
</template>

<script>
import Mixin from '@/static/mixin'
import Card from '@/components/card'
import MainVisual from '@/components/MainVisual'
import Profile from '@/components/Profile'
import Ability from '@/components/Ability'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
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
    MainVisual,
    Profile,
    Ability,
    Project,
    Skills,
    Contact
  },
  async asyncData({ env, params }) {
    const { items } = await createClient().getEntries({
      content_type: "project"
    })
    const sortedProjects = items.map(project => {
      return {
        link: project.fields.link,
        projectName: project.fields.projectName,
        year: project.fields.year,
        image: project.fields.image,
        tags: project.fields.tags.sort((a, b) => a.fields.order < b.fields.order ? -1 : 1)
      }
    })
    return {
      projects : sortedProjects
    }
  }
  // async asyncData({ env, params }) {
  //   return await createClient()
  //     .getEntries('post')
  //     .then(entries => {
  //       return {
  //         posts: entries.items
  //       }
  //     })
  //     .catch(console.error)
  // }
}
</script>