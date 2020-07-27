<template>
  <div id="contenedor" class="black">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
#contenedor {
  display: grid;
  place-items: center;
  height: 100vh;
  overflow: auto;
  color: white;
  background-image: url('./assets/restaurant.jpg');
  background-size: cover;
  background-position: center bottom;
  font-family: 'Oswald', sans-serif;
}
</style>
