<template>
  <div class="app">
    <video src="./assets/planet.mp4" class="video-bg" autoplay muted loop="true">
      <source src="./assets/planet.mp4" type="video/mp4" style="width: 100%; height: 100%">
    </video>
    <div class="layer">
      <router-view :key="$route.path"></router-view>
    </div>
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
  height: 100vh;
  overflow: hidden;
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
  color: #EBEFEA;
}

.video-bg {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

@media (min-width: 1023px) {
  .video-bg {
    display: block;
  }
}

.app {
  width: 100%;
  height: 100vh;
  background: #000;
}

.layer {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: linear-gradient(250deg, rgba(7,7,7,0.95) 0%, rgba(7,7,7,0.8211659663865546) 64%, rgba(7,7,7,0) 100%);
}
</style>
