<template>
  <div class="skills">
    <div class="col">
      <h2>Languages</h2>
      <ul>
        <li>Python 3</li>
        <li>Java</li>
        <li>JavaScript</li>
        <ul>
          <li>ES6</li>
          <li>Flow</li>
          <li>TypeScript</li>
          <li>Node.js</li>
        </ul>
        <li>CSS</li>
        <ul>
          <li>SASS</li>
          <li>LESS</li>
          <li>PostCSS</li>
        </ul>
        <li>HTML5</li>
        <li>SQL</li>
        <li>GraphQL</li>
      </ul>
    </div>

    <div class="col">
      <h2>Frameworks</h2>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Vue.js</li>
        <li>Bootstrap</li>
        <li>Express.js</li>
        <li>Django</li>
      </ul>
    </div>
    <div class="col">
      <h2>Technologies</h2>
      <ul>
        <li>Git</li>
        <li>Docker</li>
        <li>Travis CI</li>
        <li>Webpack</li>
        <li>Gulp</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
}
</script>

<style scoped lang="scss">
.skills {
  display: flex;
  max-width: 600px;

  .col {
    flex: 1 0 0;
  }

  ul:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 850px) {
    display: block;

    .col:not(:first-child) {
      margin-top: 20px;
    }
  }
}
</style>
