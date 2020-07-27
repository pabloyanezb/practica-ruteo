<template>
  <div class="container">
      <h1 class="grey-text text-lighten-5">{{ $route.params.nombre }}</h1>
      <router-view></router-view>
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
  text-transform: capitalize;
}
p {
  margin: 30px 0;
  font-weight: 700;
  font-size: 17pt;
}
</style>