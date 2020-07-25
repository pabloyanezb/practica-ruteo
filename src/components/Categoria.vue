<template>
  <div class="container">
      <h1 class="teal-text text-accent-1">Lista de restaurantes {{ $route.params.nombre }}</h1>
      <ul>
          <li>Lorem ipsum dolor  adipisicing elit.</li>
          <li>sit amet consectetur</li>
          <li>Non expedita, dolorem itaque cum dolor provident culpa,</li>
          <li>rerum eveniet est eligendi autem aut sit minima,</li>
          <li>eius sequi suscipit amet! Dicta, magni.</li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  text-align: center;
}
h1 {
  font-weight: 700;
}
li {
  font-weight: 700;
  font-size: 17pt;
  text-shadow: 3pt 1pt #2424248c;
}
</style>