<template>
  <article class="skills">
    <h2>Skills</h2>
    <h3>言語</h3>
    <SkillBar
      v-for="skill in skills.languages"
      :key="skill.name"
      :name="skill.name"
      :score="skill.score"
    />
    <h3>フレームワーク</h3>
    <SkillBar
      v-for="skill in skills.frameworks"
      :key="skill.name"
      :name="skill.name"
      :score="skill.score"
    />
    <h3>データベース</h3>
    <SkillBar
      v-for="skill in skills.databases"
      :key="skill.name"
      :name="skill.name"
      :score="skill.score"
    />
    <h3>その他</h3>
    <SkillBar
      v-for="skill in skills.others"
      :key="skill.name"
      :name="skill.name"
      :score="skill.score"
    />
  </article>
</template>

<script>
import SkillBar from '@/components/atoms/SkillBar'
import skills from '@/assets/json/skills.json'

export default {
  components: {
    SkillBar
  },
  computed: {
    skills() {
      return skills
    }
  }
}
</script>

<style lang="scss">
.skills {
  background-color: $color-basic-bg;
  padding: $basic-margin;
  text-align: center;

  h2 {
    margin: $basic-margin;
    font-size: $font-title;
  }

  h3 {
    margin-top: $basic-margin * 2;
    font-size: $font-big;
  }
}
</style>
