<template>
  <div class="ftic">
    <p>
      🦠
      <a href="https://shorturl.at/ditA0" target="_blank">COVID-19 Footprint</a>
    </p>
    <p>
      ⚙️
      <a href="https://www.npmjs.com/package/quickbuild" target="_blank"
        >Quickbuild</a
      >
    </p>
    <p>
      🧪
      <a href="https://www.npmjs.com/package/acquire-module" target="_blank"
        >Acquire</a
      >
    </p>
    <p>
      🔍 <a href="https://shorturl.at/dhjR7" target="_blank">Search GitHub</a>
    </p>
    <p>
      🚀
      <a href="https://abirbhushan.com/gravity-simulator/" target="_blank"
        >Gravity Simulator</a
      >
    </p>
    <p>📟 <a href="shorturl.at/CGOTU" target="_blank">LaTeX Cheat Sheet</a></p>
  </div>
</template>

<script>
export default {
  name: 'OpenSource',
}
</script>

<style scoped lang="scss">
.ftic {
  p {
    padding-left: 3.5%;
  }
  a {
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }
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
