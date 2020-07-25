<template>
  <div class="container">
      <h1 class="teal-text text-accent-1">{{ $route.params.nombre }}</h1>
      <p>Acerca de:</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed architecto deleniti provident asperiores fugiat est modi corporis atque nisi quae, vel ullam exercitationem tempore similique assumenda amet necessitatibus at!</p>
  </div>
</template>

<script>
export default {
    name: 'Restaurante'
}
</script>

<style scoped>
.container {
  text-align: center;
}
h1 {
  font-weight: 700;
}
p {
  margin: 30px 0;
  font-weight: 700;
  font-size: 17pt;
  text-shadow: 3pt 1pt #2424248c;
}
</style>