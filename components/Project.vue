<template>
  <article class="project">
    <h2>Project</h2>
    <div class="projext_flex">
      <div
        class="projext_container"
        v-for="(project, i) in projects"
        :key="i"
      >
        <a :href="project.link" target="_brank" rel="noopener">
          <h3>{{ project.projectName }} ({{ project.year }})</h3>
          <img :src="`https:${project.image.fields.file.url}`">
        </a>
        <ul>
          <li
            v-for="tag in project.tags"
            :key="tag.fields.slug"
          >
            {{ tag.fields.tagName }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    projects: {
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

  @media (min-width: $tb-min-width) {
    .projext_flex {
      display: flex;

      .projext_container {
        margin: $basic-double-margin;
        flex: 1;
      }
    }
  }
}
</style>
