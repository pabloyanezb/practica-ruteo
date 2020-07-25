<template>
  <div id="login" class="card-panel blue-grey darken-4">
    <h3 class="teal-text text-accent-1">Ingresa a DojoReviews</h3>
    <form>
      <div class="input-field">
        <input id="email" type="email" class="validate" required/>
        <label for="email">Email</label>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" required/>
        <label for="password">Contraseña</label>
      </div>
      <a class="waves-effect waves-light btn-large teal accent-1 black-text">Ingresar</a>
    </form>
  </div>
</template>

<script>
export default {
  name: "Ingreso",
};
</script>

<style scoped>
#login {
  max-width: 300px;
  height: 58%;
  text-align: center;
  margin-bottom: 80px;
}
h3 {
  margin-bottom: 10%;
}
.btn-large {
  text-transform: none;
}
</style>