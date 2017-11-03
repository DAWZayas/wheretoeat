<template>
  <div class="mainBloc">
    <img :src="info.img">
    <div class="conta-in">
      <div class="titulo-star">
        <h1>{{ info.title }}</h1> <h5>{{ info.location }}</h5>
        <div class="stars">
          <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
          <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
          <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
          <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
          <nuxt-link to="#"><i class="material-icons">&#xe839;</i></nuxt-link>
          <nuxt-link to="#" class="str">{{ info.points }}</nuxt-link>
        </div>
      </div>
      <div class="icoption">
        <nuxt-link to="#"><i class="material-icons" style="color:#a85122;">&#xe55f;</i></nuxt-link>
        <nuxt-link to="#"><i class="material-icons">&#xe0b9;</i></nuxt-link>
        <nuxt-link to="#"><i class="material-icons">&#xe0cd;</i></nuxt-link>
      </div>
    </div>
    <hr>
    <h3>{{ info.comTitle }}</h3>
    <p>{{ info.comment }} </p>
    </div>
</template>

<script>
  export default {
    props: ['info'],
    data () {
      return {
      }
    }
  }
</script>
<style>

<style media="screen">

.mainBloc {
  background:white;
  padding:10px;
}

.conta-in{
  display: flex;
  align-items: flex-end;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.icoption{
  display: flex;
  flex-flow: row-reverse nowrap;
}
.icoption a i{
  color: #2c3e50;;
  text-decoration: none;
  font-size: 2em;
}
.icoption a{
  color: #2c3e50;
  margin-right: 10%;
}

@media screen and (min-width: 650px) {
  .mainBloc{
    width: 50%;
    padding: 5px;
  }
}
@media screen and (min-width: 1100px) {
  .mainBloc{
    width: 32%;
    padding: 5px;
  }
}
@media screen and (min-width: 1200px) {
  .conta-in{
    display: flex;
    flex-flow: row nowrap;
  }
}
</style>
