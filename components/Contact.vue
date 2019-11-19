<template>
  <article class="contact">
    <h2>Contact</h2>
    <SocialIcon :link="twitterLink" :icon="twitterIcon" />
    <SocialIcon :link="githubLink" :icon="githubIcon" />
    <p class="mail">Mail: {{ mail }}</p>
  </article>
</template>

<script>
import Mixin from '@/static/mixin'
import SocialIcon from '@/components/atoms/SocialIcon'
import twitterIcon from '@/assets/img/twitter_icon.png'
import githubIcon from '@/assets/img/github_icon.png'

export default {
  mixins: [Mixin],
  components: {
    SocialIcon
  },
  computed: {
    twitterIcon() {
      return twitterIcon
    },
    githubIcon() {
      return githubIcon
    }
  }
}
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: $color-basic-bg;
  padding: $basic-double-margin 0;;

  h2 {
    margin-bottom: $basic-double-margin;
    font-size: $font-title;
  }

  .social_icon {
    width: 30px;
    height: 30px;
  }

  .mail {
    margin-top: $basic-double-margin;
  }
}
</style>
