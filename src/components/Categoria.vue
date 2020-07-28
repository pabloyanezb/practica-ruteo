<template>
  <div class="container">
    <h1 class="grey-text text-lighten-5">
      Lista de restaurantes <span>{{ nombre_categoria }}</span>
    </h1>
    <ul>
      <a href="">
        <li>Lorem ipsum</li>
      </a>
      <a href="">
        <li>Lorem ipsum</li>
      </a>
      <a href="">
        <li>Lorem ipsum</li>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Categoria",
  props: {
    nombre_categoria: String,
  },
};
</script>

<style scoped>
h1 {
  font-weight: 700;
  text-align: center;
}
ul {
  list-style-type: square !important;
}
li {
  font-weight: 700;
  font-size: 17pt;
  margin: 20px 80px;
}
span {
  text-transform: capitalize;
}
a {
  color: rgb(255, 138, 96);
}
</style>
