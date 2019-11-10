<template>
  <div>
    <!-- <Header /> -->
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
html {
  background-color: $color-basic-bg;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: $font-medium;
  box-sizing: border-box;
}
</style>

