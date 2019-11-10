<template>
  <article class="main_visual">
    <h1>{{ siteTitle }}</h1>
    <img src="@/assets/img/main_visual.png">
  </article>
</template>

<script>
import Mixin from '@/static/mixin'

export default {
  mixins: [Mixin]
}
</script>

<style lang="scss">
.main_visual {
  position: relative;

  img {
    opacity: 0.3;
  }

  h1 {
    width: 100%;
    text-align: center;
    font-size: $font-title;
    position: absolute;
    left: 50%;
    top: 50%;
    transform : translate(-50%, -50%);
    -webkit-transform : translate(-50%, -50%);
  }
}
</style>
