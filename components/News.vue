<template>
  <article class="news">
    <h2>News</h2>
    <div class="news_link">
      <a href="https://qiita.com/to4-yanagi/items/4e431b99b78401ef65ca" target="_blank" rel="noopener">
        <p class="date">2019/12/26</p>
        <p class="content">技術ブログ「4種類のHeadlessCMSを試してみた感想」を公開しました</p>
      </a>
    </div>
    <div class="news_link">
      <a href="https://qiita.com/to4-yanagi/items/c2d4c94c50221e85b8f3" target="_blank" rel="noopener">
        <p class="date">2018/09/18</p>
        <p class="content">技術ブログ「React NativeのViewもLogicも非同期処理もjestで全部テストする」を公開しました</p>
      </a>
    </div>
    <div class="news_link">
      <a href="https://qiita.com/to4-yanagi/items/74c62c723e9bcd2883e6" target="_blank" rel="noopener">
        <p class="date">2018/08/09</p>
        <p class="content">技術ブログ「create-react-native-appから本格的な開発に移行するためのTips」を公開しました</p>
      </a>
    </div>
    <div>
    </div>
  </article>
</template>

<style lang="scss">
.news {
  margin-top: -10px;
  background-color: rgba($color-accent-bg, 0.5);
  padding: $basic-double-margin $basic-margin;

  h2 {
    text-align: center;
    font-size: $font-title;
    margin-bottom: $basic-margin;
  }

  .news_link {
    padding: $basic-margin;
    border-top: solid 1px #CCC;

    a {
      color: black;
      text-decoration: none;

      .date {
        font-weight: bold
      }

      .content {
        margin-top: $basic-margin;
      }
    }
  }
}

.news div:last-child {
  border-bottom: solid 1px #CCC;
}
</style>
