<template>
  <article class="ability">
    <h2>Ability</h2>
    <div class="ability_flex">
      <div class="ability_container">
        <img src="@/assets/img/web_develop.png">
        <h3>webシステムの開発/運用</h3>
        <div class="markdown-body" v-html="webDevelop" />
      </div>
      <div class="ability_container">
        <img src="@/assets/img/kaizen.png">
        <h3>既存業務の改善支援</h3>
        <div class="markdown-body" v-html="kaizen" />
      </div>
    </div>
  </article>
</template>

<script>
import webDevelop from '@/assets/markdown/web_develop.md'
import kaizen from '@/assets/markdown/kaizen.md'

export default {
  computed: {
    webDevelop() {
      return webDevelop
    },
    kaizen() {
      return kaizen
    }
  }
}
</script>

<style lang="scss">
.ability {
  background-color: rgba($color-accent-bg, 0.5);
  padding: $basic-margin;
  text-align: center;

  h2 {
    margin: $basic-margin;
    font-size: $font-title;
  }

  .ability_container {
    margin-top: $basic-double-margin;

    h3 {
      margin: $basic-margin;
      font-size: $font-big;
    }

    img {
      width: 150px;
      margin-bottom: $basic-margin;
    }

    .markdown-body {
      margin-top: $basic-margin;
      text-align: left;
    }
  }

  @media (min-width: $tb-min-width) {
    .ability_flex {
      display: flex;

      .ability_container {
        padding: $basic-double-margin;
        flex: 1;
      }
    }
  }
}
</style>
