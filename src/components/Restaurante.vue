<template>
  <div class="container">
    <h1 class="grey-text text-lighten-5">{{ nombre }}</h1>
    <h4>
      <router-link :to="{ name: 'about' }">Acerca de </router-link>|
      <router-link :to="{ name: 'images' }"> Fotos </router-link>|
      <router-link :to="{ path: 'reviews' }"> Reseñas</router-link>
    </h4>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Restaurante',
    props: {
      nombre: String
    }
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
h4 {
  color: rgb(255, 138, 96);
}
p {
  font-weight: 700;
  font-size: 17pt;
}
a{
  color: rgb(255, 138, 96);
}
</style>