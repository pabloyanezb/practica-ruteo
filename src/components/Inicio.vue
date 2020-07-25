<template>
  <div class="hello">
    <nav>
      <div class="nav-wrapper">
        <img src="../assets/logo.png" alt="logo">
        <a href="#" class="brand-logo">DojoReviews</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a class="btn white-text deep-orange darken-1" href="sass.html"
              >Ingreso</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <h1 class="deep-orange-text text-accent-1">Bienvenido a DojoReviews.</h1>
    <p class="flow-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquam
      quae repudiandae a modi dolorum sint ipsa distinctio, in soluta.
    </p>
  </div>
</template>

<script>
export default {
  name: "Inicio",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: grid;
  place-items: center;
}
nav {
  background-color: transparent;
  box-shadow: 0 0 0 0 transparent;
}
img {
  height: 50px;
  position: relative;
  left: 76px;
  top: 8px;
}
.brand-logo {
  margin-left: 80px;
  font-weight: 700;
  font-size: 26pt;
}
#nav-mobile a {
  color: rgba(0, 0, 0, 0.794);
  font-weight: 800;
  text-transform: uppercase;
}
h1 {
  text-align: center;
  margin-top: 12%;
  font-weight: 700;
}
p {
  margin: 0 31%;
  text-align: center;
  font-weight: 700;
  font-size: 22pt;
  text-shadow: 3pt 1pt #242424c2;
}
</style>
