<template>
  <article class="project">
    <h2>Projects</h2>
    <div class="project_flex">
      <div
        class="project_container"
        v-for="(project, i) in projectList"
        :key="i"
      >
        <a :href="project.link" target="_brank" rel="noopener">
          <h3>{{ project.projectName }} ({{ project.year }})</h3>
          <client-only>
            <lazy-component>
              <img :src="`https:${project.image.fields.file.url}`" :alt="project.image.fields.description">
            </lazy-component>
          </client-only>
        </a>
        <ul>
          <li
            v-for="tag in project.tags"
            :key="tag.fields.slug"
          >
            {{ tag.fields.tagName }}
          </li>
        </ul>
        <div class="comment" v-html="project.comment.replace(/\r?\n/g, '<br/>')" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    projectList: {
      type: Array,
      default: null
    },
  },
}
</script>

<style lang="scss">
.project {
  text-align: center;
  background-color: $color-basic-bg;
  padding: $basic-double-margin;

  h2 {
    font-size: $font-title;
  }

  a {
    cursor: pointer;

    h3 {
      margin: $basic-margin 0;
      font-size: $font-medium;
    }

    img {
      width: 200px;
      max-height: 150px;
      object-fit: cover;
    }
  }

  ul {
    display: flex;
    margin: $basic-margin;
    flex-wrap: wrap;
    justify-content: center;

    li {
      margin: 5px;
      padding: 5px 10px;
      background: $color-accent;
      border-radius: 10px;
    }
  }

  .comment {
    padding: 10px 20px;
    text-align: left;
    line-height: 20px;
  }

  @media (min-width: $tb-min-width) {
    .project_flex {
      display: flex;
      flex-wrap: wrap;

      .project_container {
        width: 44%;
        margin: 10px auto 0 10px;

        ul {
          justify-content: left;
        }
      }
    }
  }

  @media (min-width: $pc-min-width) {
    .project_flex {
      .project_container {
        width: 29%;
        margin: 20px auto 0 25px;
      }
    }
  }
}
</style>
