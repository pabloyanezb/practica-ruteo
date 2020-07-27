<template>
  <div id="contenedor" class="black">
    <nav>
      <div class="nav-wrapper">
        <!-- <img src="../assets/logo.png" alt="logo"> -->
        <router-link :to="{ name: 'inicio' }" class="brand-logo white-text">DojoReviews</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link :to="{ name: 'login' }" class="btn white-text grey darken-4 waves-effect waves-light">Ingreso</router-link>
          </li>
        </ul>
      </div>
    </nav>
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
nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 60px;
  background-color: transparent !important;
  box-shadow: 0 0 0 0 transparent !important;
}
.brand-logo {
  font-weight: 700;
  font-size: 5vh;
}
</style>
