<template>
  <div class="hello">
    <h1 class="white-text">Bienvenido a DojoReviews.</h1>
    <div class="row">
      <div class="col s12 l6 offset-l3">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquam
        quae repudiandae a modi dolorum sint ipsa distinctio, in soluta.
        </p>
      </div>  
    </div>
    
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
  overflow-x: hidden;
  margin-top: 10%;
}
img {
  height: 50px;
  position: relative;
  left: 76px;
  top: 8px;
}
.btn {
  text-transform: none;
}
h1 {
  display: inline;
  overflow-wrap: break-word;
  text-align: center;
  font-size: 45pt;
  font-weight: 700;
}
p {
  text-align: center;
  font-size: 3vh;
  display : block; overflow-wrap: break-word; max-width : 100%;
}
</style>
