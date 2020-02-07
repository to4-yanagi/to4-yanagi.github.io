<template>
  <article class="news">
    <h2>News</h2>
     <div
        class="news_link"
        v-for="(news, i) in newsList"
        :key="i"
      >
        <a :href="news.fields.linkUrl" target="_blank" rel="noopener">
          <p class="date">{{ formatDate(news.fields.date) }}</p>
          <p class="content">{{ news.fields.title }}</p>
        </a>
    </div>
  </article>
</template>

<script>
import { parseISO, format } from 'date-fns'

export default {
  props: {
    newsList: {
      type: Array,
      default: null
    },
  },
  methods: {
    formatDate: date => format(parseISO(date), 'yyyy/MM/dd')
  }
}
</script>

<style lang="scss">
.news {
  margin-top: -10px;
  background-color: rgba($color-accent-bg, 0.5);
  padding: $basic-double-margin $basic-margin;

  h2 {
    text-align: center;
    font-size: $font-title;
    margin-bottom: $basic-margin;
  }

  .news_link {
    padding: $basic-margin;
    border-top: solid 1px #CCC;

    a {
      color: black;
      text-decoration: none;

      .date {
        font-weight: bold
      }

      .content {
        margin-top: $basic-margin;
      }
    }
  }
}

.news div:last-child {
  border-bottom: solid 1px #CCC;
}
</style>
