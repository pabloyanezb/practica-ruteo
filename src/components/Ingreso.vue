<template>
  <div id="login">
    <h2 class="teal-text text-accent-1">Ingresa a DojoReviews</h2>
    <form>
      <div class="input-field">
        <input id="email" type="email" class="validate" required/>
        <label class="teal-text text-accent-1" for="email">Email</label>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" required/>
        <label class="teal-text text-accent-1" for="password">Contraseña</label>
      </div>
      <a class="waves-effect waves-light btn-large deep-orange accent-1">Ingresar</a>
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
  max-width: 380px;
  height: fit-content;
  text-align: center;
  padding: 20px 0;
}
.input-field {
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.411);
  border-radius: 5px;
  padding: 2px 10px;
}
label {
  margin-left: 10px;
}
h2 {
  margin-bottom: 10%;
  font-weight: 800;
  text-justify: auto;
}
.btn-large {
  text-transform: none;
}
</style>