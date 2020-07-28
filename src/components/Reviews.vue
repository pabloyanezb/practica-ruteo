<template>
  <div class="container">
    <div class="row">
      <div class="col m4">
        <img src="../assets/person1.jpg" />
        <img src="../assets/star-rating.png" />
      </div>
      <div class="col m8">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
          eaque laborum iusto necessitatibus atque deserunt cumque tempora
          facere at corporis repellendus voluptate sint pariatur culpa ipsa fuga
          esse veritatis consequatur?
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col m4">
        <img src="../assets/person2.jpg" />
        <img src="../assets/star-rating.png" />
      </div>
      <div class="col m8">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
          cupiditate animi at aliquam ipsum ipsa sit facilis distinctio a
          debitis corrupti in eum, fuga non! Consequuntur facilis animi alias
          numquam.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews",
};
</script>

<style scoped>
.container {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.344);
  padding-top: 1rem;
}
p {
  font-size: 13pt;
}
img {
  width: 100%;
  margin-left: 5px;
}
</style>
