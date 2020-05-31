<template>
  <div class="welcome">
    <h1>Abir</h1>
    <h3>Computer Science Undergraduate at UCL</h3>

    <div class="media-panel">
      <div class="col">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </div>

      <div class="col">
        <font-awesome-icon :icon="[ 'fab', 'github' ]" />
      </div>

      <div class="col">
        <font-awesome-icon :icon="['fas', 'blog']" />
      </div>

      <div class="col">
        <font-awesome-icon :icon="['fas', 'university']" />
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'Welcome',}
</script>

<style scoped lang="scss">
.welcome {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 42px;
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
