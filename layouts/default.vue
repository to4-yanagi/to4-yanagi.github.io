<template>
  <div>
    <!-- <Header /> -->
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
html {
  background-color: $color-basic-bg;
  font-size: $font-medium;
  box-sizing: border-box;

  body {
    font-family: 'Osaka-Mono', Roboto, sans-serif;

    h2 {
      font-family: NexaBold;
    }
  }
}
</style>

