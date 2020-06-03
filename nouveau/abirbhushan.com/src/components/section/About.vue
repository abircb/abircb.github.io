<template>
  <div class="content">
    <h2>
      Born and raised in New Delhi, I am currently in London exploring the
      realms of Computer Science and Engineering as an undergraduate at
      University College London (UCL). My interests lie in (Full-stack) Software
      Engineering and Machine Learning, and I often work on open-source software
      development to keep myself busy.
    </h2>
    <h2>
      Here is a featured project:
      <a href="https://shorturl.at/ditA0">COVID-19 Footprint</a>
    </h2>
    <h2>
      Some lists and graphs to know more about me ..
    </h2>
    <ul>
      <li>Countries visited</li>
      <li>G.O.A.Ts</li>
      <li>Hardware</li>
    </ul>
  </div>
</template>

<script>
export default { name: 'About' }
</script>

<style scoped lang="scss">
.content {
  h2 {
    font-size: 1.1em;
    margin-bottom: 1em;
  }

  a {
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }

  .media-panel {
    display: flex;
    max-width: 600px;
    padding-top: 2%;
    align-items: center;
    justify-content: center;

    .col {
      width: 25%;
      padding: 50%;
    }
  }
}
</style>
