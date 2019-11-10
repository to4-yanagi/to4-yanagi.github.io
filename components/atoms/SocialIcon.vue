<template>
  <a :href="link" target="_blank" rel="noopener">
    <img class="social_icon" :src="icon">
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss">
.social_icon {
  width: 30px;
  height: 30px;
}
</style>