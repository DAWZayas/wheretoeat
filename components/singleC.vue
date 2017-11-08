<template>
  <div class="mainBloc">
    <img :src="info.img">
    <div class="conta-in">
      <div class="titulo-star">
        <h1>{{ info.title }}</h1><h5></h5>
          <starsC :info="info"></starsC>
      </div>
      <div class="icoption">
        <nuxt-link to="#" data-toggle="modal" data-target="#mapLocation"><i class="material-icons" style="color:#a85122;">&#xe55f;<!--&#xe157;--></i></nuxt-link>
        <nuxt-link to="#" data-toggle="modal" data-target="#showComments"><i class="material-icons">&#xe0b9;</i></nuxt-link>
        <nuxt-link to="#" data-toggle="modal" v-bind:data-target="nInfo" v-if="info.showButton"><i class="material-icons">&#xe0cd;</i></nuxt-link>
      </div>
    </div>
    <hr>
    <h3>{{ info.comTitle }}</h3>
    <p>{{ info.comment }} </p>
    <ratingC :info="info"></ratingC>
    <showMapC :info="info"></showMapC>
    <showCommentsC :info="info"></showCommentsC>
    <showInfoC :info="info"></showInfoC>
    </div>
</template>
<script>
  import ratingC from '~/components/ratingC'
  import starsC from '~/components/starsC'
  import showMapC from '~/components/showMapC'
  import showCommentsC from '~/components/showCommentsC'
  import showInfoC from '~/components/showInfoC'
  export default {
    props: ['info'],
    data () {
      return {
        nInfo: '#' + this.info.id
      }
    },
    components: {
      ratingC,
      starsC,
      showMapC,
      showCommentsC,
      showInfoC
    }
  }
</script>

<style scoped lang='scss'>

@import "assets/sass/colors.scss";

.mainBloc {
  background:white;
  padding:10px;
}

.conta-in{
  display: flex;
  align-items: flex-end;
  flex-direction: row nowrap;
  justify-content: space-between;
}

.titulo-star{
  display: flex;
  flex-flow: row wrap;
  font-size: 2rem;
  align-items: center;
  margin-top: 10px;
  word-wrap: break-word;
}
.titulo-star h1{
  margin-right: 2%;
  color: $redTitle;
}
.titulo-star h5{
  margin-right: 3%;
}

.icoption{
  display: flex;
  flex-flow: row-reverse nowrap;
  /*flex-grow: 1;*/
  /*
  display: flex;
  justify-content: space-around;*/
}
.icoption a i{
  color: $blueColor;
  text-decoration: none;
  font-size: 2em;
}
.icoption a{
  color: $blueColor;
  margin-right: 20%;
}

.cabecera{
  display: flex;
  align-items: flex-end;
  flex-flow: row nowrap;
  justify-content: space-between;
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
@media screen and (min-width: 650px) {
  .mainBloc{
    width: 50%;
    padding: 5px;
  }

  .str {
    font-size: .7em;
  }
}
@media screen and (min-width: 1100px) {
  .mainBloc{
    width: 32%;
    padding: 5px;
  }
}
</style>
