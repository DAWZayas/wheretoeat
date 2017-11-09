<template>
    <div class="searcher">
      <input type="text" name="" placeholder="restaurante,ciudad,plato...">
      <div class="searchBloc">
        <nuxt-link to="#"><i class="material-icons">&#xe8b6;</i></nuxt-link>
      </div>
  </div>

</template>

<style scoped media="screen">
@import "assets/sass/colors.scss";
.searcher {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}

.searcher a i{
  color: black;
  font-size: 1.8em;
}

input {
  width: 90%;
  padding: 5px;
  padding-left: 10px;
  color: grey;
}

.searchBloc {
  width: 10%;
  text-align: center;
}

@media screen and (min-width: 800px) {

  .searcher {
    display: none;
  }
}

</style>
