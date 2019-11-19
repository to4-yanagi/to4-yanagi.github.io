<template>
  <article class="main_visual">
    <img src="@/assets/img/main_visual.png">
  </article>
</template>


<style lang="scss">
@media (min-width: $tb-min-width) {
  .main_visual {
    // background-color: $color-accent-bg;
    text-align: center;

    img {
      width: 100%;
      max-height: 500px;
      object-fit: cover;
    }
  }
}
</style>
