<template>
  <article class="skills">
    <h2>Skills</h2>
    <div class="skills_flex">
      <div class="skills_container">
        <h3>言語</h3>
        <SkillBar
          v-for="skill in skills.languages"
          :key="skill.name"
          :name="skill.name"
          :score="skill.score"
        />
      </div>
      <div class="skills_container">
        <h3>フレームワーク</h3>
        <SkillBar
          v-for="skill in skills.frameworks"
          :key="skill.name"
          :name="skill.name"
          :score="skill.score"
        />
      </div>
      <div class="skills_container">
        <h3>チーム開発 / CI</h3>
        <SkillBar
          v-for="skill in skills.teams"
          :key="skill.name"
          :name="skill.name"
          :score="skill.score"
        />
      </div>
      <div class="skills_container">
        <h3>データベース</h3>
        <SkillBar
          v-for="skill in skills.databases"
          :key="skill.name"
          :name="skill.name"
          :score="skill.score"
        />
      </div>
       <div class="skills_container">
        <h3>その他</h3>
        <SkillBar
          v-for="skill in skills.others"
          :key="skill.name"
          :name="skill.name"
          :score="skill.score"
        />
      </div>
    </div>
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
  background-color: rgba($color-accent-bg, 0.5);
  padding: $basic-double-margin;
  text-align: center;

  h2 {
    font-size: $font-title;
  }

  .skills_container {
    margin: $basic-margin;

    h3 {
      margin-top: $basic-double-margin;
      font-size: $font-big;
    }
  }

  @media (min-width: $tb-min-width) {
    .skills_flex {
      display: flex;
      flex-wrap: wrap;

      .skills_container {
        width: 44%;
        margin: $basic-margin;
      }
    }
  }

  @media (min-width: $pc-min-width) {
    .skills_flex {
      .skills_container {
        width: 26%;
        margin: $basic-double-margin;
      }
    }
  }
}
</style>
