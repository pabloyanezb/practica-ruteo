<template>
  <div class="container">
      <h1 class="grey-text text-lighten-5">Lista de restaurantes <span>{{ $route.params.nombre }}</span></h1>
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
}
span {
  text-transform: capitalize;
}
</style>