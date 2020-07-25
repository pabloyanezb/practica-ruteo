<template>
  <div id="contenedor" class="black">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#contenedor {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  place-items: center;
  height: 100vh;
  overflow: auto;
  color: white;
  background-image: url('./assets/restaurant.jpg');
  background-size: cover;
  background-position: center ;
}
</style>
