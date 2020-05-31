<template>
  <div class="ftic">
    <p>
      On a rainy afternoon in 2013 I built a small game in order to try out the
      new Web Audio API. I published and move onto other things, quickly
      forgetting about it.
    </p>
    <p>
      A few months later I was browsing Reddit when I came across my very own
      game on the front page! It received over a million hits that week, and
      since then has received publicity on CNN, Mashable, Buzfeed, and countless
      other "news" sources.
    </p>
    <p>
      Since the game's inception, 29,000,000 invisible cows have been found by
      9,500,000 unique players.
    </p>
    <a class="button" href="https://findtheinvisiblecow.com/" target="_blank"
      >Find The Invisible Cow</a
    >
  </div>
</template>

<script>
export default {
  name: 'FTIC',
}
</script>

<style scoped lang="scss">
.ftic {
  .button {
    background: white;
    border-radius: 2px;
    box-shadow: 0 5px 0 #ccc;
    color: black;
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      background: #e5e5e5;
      box-shadow: 0 4px 0 #ccc;
      transform: translateY(1px);
    }

    &:active {
      box-shadow: 0 0 0 #ccc;
      transform: translateY(5px);
    }

    @media print {
      display: none;
    }
  }
}
</style>
