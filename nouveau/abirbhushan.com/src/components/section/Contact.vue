<template>
  <div class="contact">
    <!-- <p>
      I&apos;m currently living in London, though I'm open to opportunities
      across the globe.
    </p> -->
    <p>
      Email me at
      <a href="mailto:bhushan.abir@gmail.com">bhushan.abir@gmail.com</a>.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
  }
</script>

<style scoped lang="scss">
  .contact {
    a {
      color: inherit;

      &:hover {
        text-decoration: none;
      }
    }
  }
</style>
