<template>
  <section class="index">
    <MainVisual />
    <News :newsList="newsList" />
    <Profile />
    <Ability />
    <Project :projectList="projectList" />
    <Skills />
    <Contact />
  </section>
</template>

<script>
import Mixin from '@/static/mixin'
import MainVisual from '@/components/MainVisual'
import News from '@/components/News'
import Profile from '@/components/Profile'
import Ability from '@/components/Ability'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import createClient from '@/plugins/contentful'

export default {
  mixins: [Mixin],
  components: {
    MainVisual,
    News,
    Profile,
    Ability,
    Project,
    Skills,
    Contact
  },
  async asyncData({ env, params }) {
    const projectList = await createClient().getEntries({
      content_type: "project"
    })

    const newsList = await createClient().getEntries({
      content_type: "news"
    })

    const sortedProjectList = projectList.items.map(project => {
      return {
        link: project.fields.link,
        projectName: project.fields.projectName,
        year: project.fields.year,
        image: project.fields.image,
        tags: project.fields.tags.sort((a, b) => a.fields.order < b.fields.order ? -1 : 1),
        comment: project.fields.comment
      }
    })
    return {
      newsList : newsList.items,
      projectList : sortedProjectList
    }
  }
}
</script>