<template>
  <div class="ftic">
    <p>
      📋
      <a href="https://npmjs.com/package/wdym" target="_blank"
        >WDYM (What do you mean?)</a
      >: A tool to convert Common Log Format into more useful (and
      human-readable) JSON and/or CSV. Especially handy when analysing server
      log files for activity and performance. Can be used both as a
      <a
        href="https://github.com/abircb/wdym/wiki/API-Documentation"
        target="_blank"
        >Node.js library</a
      >
      and as a
      <a
        href="https://github.com/abircb/wdym#command-line-executable"
        target="_blank"
        >command line executable</a
      >.
    </p>
    <p>
      🦠
      <a href="https://tinyurl.com/y9vzmdx3" target="_blank"
        >COVID-19 Footprint</a
      >: A Chrome extension that provides real-time global and regional data of
      the novel coronavirus pandemic.
    </p>
    <p>
      ⚙️
      <a href="https://www.npmjs.com/package/quickbuild" target="_blank"
        >Quickbuild</a
      >: A mature, feature-complete application generator with an emphasis on
      speed — generates boilerplate code for a large range of project types
      (like Express.js server, React-Redux application, etc.) and has added
      functionality, like initialising version-control and installing
      dependencies, for each project.
    </p>
    <p>
      🧪
      <a href="https://www.npmjs.com/package/acquire-module" target="_blank"
        >Acquire</a
      >: Node.js' <code>require</code> on steroids.
    </p>
    <p>
      🔍
      <a href="https://tinyurl.com/y7lcg8ze" target="_blank">Search GitHub</a>:
      A Chrome extension that allows a user to construct powerful queries to
      search GitHub repositories, code, marketplace, etc. using 24 different
      parameters.
    </p>
    <p>
      🚀
      <a href="https://abirbhushan.com/gravity-simulator/" target="_blank"
        >Gravity Simulator</a
      >: A simple, customisable simulator built to understand two (or more)
      celestial bodies interact with each other in space. Inspired by
      <a href="https://github.com/VincentGarreau/particles.js/" target="_blank"
        >particles.js</a
      >.
    </p>
    <p>
      📟
      <a href="https://tinyurl.com/y9atwxoo" target="_blank"
        >LaTeX Cheat Sheet</a
      >: A LaTeX cheat sheet as a Chrome extension.
    </p>
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
