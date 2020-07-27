<template>
  <div class="container">
    <h1 class="grey-text text-lighten-5">{{ $route.params.nombre }}</h1>
    <h4>
      <router-link :to="{ name: 'about' }">Acerca de |</router-link>
      <router-link :to="{ name: 'images' }"> Fotos |</router-link>
      <router-link :to="{ path: 'reviews' }"> Reseñas</router-link>
      <!-- <router-link :to="{ path: `/${$route.params.nombre}`}">Acerca de |</router-link>
      <router-link :to="{ path: `/${$route.params.nombre}/images`}"> Fotos |</router-link>
      <router-link :to="{ path: `/${$route.params.nombre}/reviews`}"> Reseñas</router-link> -->
    </h4>
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
  font-weight: 700;
  font-size: 17pt;
}
a{
  color: rgba(240, 240, 240, 0.972);
}
</style>