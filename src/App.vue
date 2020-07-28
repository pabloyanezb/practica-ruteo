<template>
  <div id="contenedor" class="black">
    <nav>
      <div class="nav-wrapper">
        <!-- <img src="../assets/logo.png" alt="logo"> -->
        <router-link :to="{ name: 'inicio' }" class="brand-logo white-text">DojoReviews</router-link>
        
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li class="busqueda">
            <form v-on:submit.prevent="onSubmit">
              <div class="input-field">
                <input id="search" type="search" v-model="nombre" required>
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </li>
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
  data() {
    return {
      nombre: null
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({name: 'about', params: {nombre: this.nombre}})
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

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
.busqueda {
  height: 45px;
  margin: 13px;
  background-color: rgba(0, 0, 0, 0.344);
  border-radius: 20px;
}
#search {
  border-radius: 20px;
}
input {
  color: rgba(255, 255, 255, 0.801);
}
.material-icons {
  position: relative;
  top: -8px !important;
  font-size: 16pt !important;
}
</style>
