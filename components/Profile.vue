<template>
  <article class="profile">
    <div class="basic_info">
      <h2>About</h2>
      <img class="main_icon" src="@/assets/img/icon.png">
      <h3>yanagi (栁沢 俊彰)</h3>
      <a href="https://twitter.com/to4_yanagi" target="_blank" rel="noopener">
        <img class="social_icon" src="@/assets/img/twitter_icon.png">
      </a>
      <a href="https://twitter.com/to4_yanagi" target="_blank" rel="noopener">
        <img class="social_icon" src="@/assets/img/github_icon.png">
      </a>
    </div>
    <div class="markdown-body" v-html="profile" />
    <p class="mail">Mail: yanagisawa@laughcraft.dev</p>
  </article>
</template>

<script>
import profile from '@/assets/markdown/profile.md'

export default {
  computed: {
    profile() {
      return profile
    }
  }
}
</script>

<style lang="scss">
.profile {
  background-color: $color-basic-bg;
  padding: $basic-margin;

  .basic_info {
    text-align: center;
    margin-bottom: $basic-margin;

    h2 {
      margin: $basic-margin;
      font-size: $font-title;
    }

    .main_icon {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      border: solid 1px;
    }

    h3 {
      margin: $basic-margin;
      font-size: $font-big;
    }

    .social_icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
