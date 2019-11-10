<template>
  <article class="project">
    <h2>Project</h2>
    <div
      v-for="(item, i) in items"
      :key="i"
    >
      <h3>{{ item.fields.projectName }} ( {{ item.fields.year }} )</h3>
      <img :src="`https:${item.fields.image.fields.file.url}`">
      <ul>
        <li
          v-for="tag in item.fields.tags"
          :key="tag.fields.slug"
        >
          {{ tag.fields.tagName }}
        </li>
      </ul>
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
}
</script>

<style lang="scss">
.project {
  text-align: center;
  background-color: $color-basic-bg;
  padding: $basic-margin;

  h2 {
    margin: $basic-margin;
    font-size: $font-title;
  }

  h3 {
    margin: $basic-margin;
    font-size: $font-medium;
  }

  img {
    width: 200px;
  }

  ul {
    display: flex;
    margin: $basic-margin;
    flex-wrap: wrap;

    li {
      margin: 5px;
      padding: 5px 10px;
      background: $color-accent;
      border-radius: 10px;
    }
  }
}
</style>
