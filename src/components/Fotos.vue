<template>
  <div class="content">
    <h3>Fotos:</h3>
    <div class="row">
      <div class="col m4 s12">
        <div class="card hoverable">
          <div class="card-image">
            <img src="../assets/3.jpg">
          </div>
        </div>
      </div>
      <div class="col m4 s12">
        <div class="card hoverable">
          <div class="card-image">
            <img src="../assets/2.jpg">
          </div>
        </div>
      </div>
      <div class="col m4 s12">
        <div class="card hoverable">
          <div class="card-image">
            <img src="../assets/1.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Fotos'
}
</script>

<style scoped>
.content {
  position: relative;
  top: -30px;
}
.m4 {
  height: 430px;
  overflow: hidden;
}
@media only screen and (max-width: 1100px) {
  .m4 {
    height: 350px;
  }
}
@media only screen and (max-width: 601px) {
  .m4 {
    height: 430px;
  }
}
</style>