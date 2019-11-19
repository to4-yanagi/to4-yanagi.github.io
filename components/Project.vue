<template>
  <article class="project">
    <h2>Project</h2>
    <div class="projext_flex">
      <div
        class="projext_container"
        v-for="(item, i) in items"
        :key="i"
      >
        <a :href="item.fields.link" target="_brank" rel="noopener">
          <h3>{{ item.fields.projectName }} ({{ item.fields.year }})</h3>
          <img :src="`https:${item.fields.image.fields.file.url}`">
        </a>
        <ul>
          <li
            v-for="tag in sortTags(item.fields.tags)"
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
    items: {
      type: Array,
      default: null
    },
  },
  methods: {
    sortTags: tags => tags.sort((a, b) => a.fields.order < b.fields.order ? -1 : 1)
  }
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
