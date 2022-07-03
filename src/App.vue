<template>
  <div class="app">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
  color: #EBEFEA;
}

.app {
  width: 100%;
  min-height: 100vh;
  background: #000;
}

@media (min-width: 760px) {
  body {
    height: 100vh;
  }

  .app {
    height: 100vh;
  }
}
</style>
