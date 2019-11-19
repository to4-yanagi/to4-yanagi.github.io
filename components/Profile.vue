<template>
  <article class="profile">
    <div class="basic_info">
      <h2>About</h2>
      <img class="main_icon" :src="mainIcon">
      <h3>yanagi (柳沢 俊彰)</h3>
      <SocialIcon :link="twitterLink" :icon="twitterIcon" />
      <SocialIcon :link="githubLink" :icon="githubIcon" />
    </div>
    <div class="markdown-body" v-html="profile" />
    <p>Mail: {{ mail }}</p>
  </article>
</template>

<script>
import Mixin from '@/static/mixin'
import mainIcon from '@/assets/img/icon.png'
import twitterIcon from '@/assets/img/twitter_icon.png'
import githubIcon from '@/assets/img/github_icon.png'
import profile from '@/assets/markdown/profile.md'
import SocialIcon from '@/components/atoms/SocialIcon'

export default {
  mixins: [Mixin],
  components: {
    SocialIcon
  },
  computed: {
    mainIcon() {
      return mainIcon
    },
    twitterIcon() {
      return twitterIcon
    },
    githubIcon() {
      return githubIcon
    },
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
      background: $color-basic-border;
    }

    h3 {
      margin: $basic-margin;
      font-size: $font-big;
    }
  }
}
</style>
