<template>
  <div class="slill_bar">
    <p>{{ name }}</p>
    <progress max="100" :value="score">{{ score }}</progress>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    score: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">

.slill_bar {
  margin-top: $basic-margin * 2;

  progress {
    margin-top: $basic-half-margin;
    background-color: $color-basic-bg;
    border: 1px solid $color-basic-border;
    border-radius: 10px;
    color: $color-accent-bar;
    width: 80%;
    height: 10px;
  }

  /* chrome */
  progress::-webkit-progress-bar {
    background-color: $color-basic-bg;
    border-radius: 10px;
  }
  progress::-webkit-progress-value {
    background-color: $color-accent-bar;
    border-radius: 10px;
  }

  /* firefox */
  progress::-moz-progress-bar {
    background-color: $color-accent-bar;
    border-radius: 10px;
  }
}

</style>
