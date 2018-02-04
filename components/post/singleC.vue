<template>
  <div class="mainBloc">
    <img :src="info.src" v-show="loadedImage" @load="handleLoadedImage">
    <div class="spinner" v-show="loadingImage"><img src="~/assets/ovalImg.svg" width="80" alt=""></div>
    <div class="conta-in">
      <div class="titulo-star">
        <h1>{{ info.title }}</h1>
          <starsC :info="info"></starsC>
      </div>
      <div class="icoption">
        <button @click="setMod" id="myBtn" class="locbut"><i class="material-icons" style="color:#a85122;font-size:35px;">&#xe55f;</i></button>
        <a href="#" @click="setComments" data-toggle="modal" data-target="#showComments"><i class="material-icons">&#xe0b9;</i></a>
        <a href="#" data-toggle="modal" v-bind:data-target="1"><i class="material-icons">&#xe0cd;</i></a>
      </div>
    </div>
    <hr>
    <span><span class="red">{{ showBill(info.bill) }}</span> por persona</span></br>
      <nuxt-link :to="this.userDirect" class="user"><i class="material-icons ico">&#xe7fd;</i><span class="name">@{{userData.username}} | <span style="font-size:12px;">{{ (new Date(info.date)).toUTCString().substr(5, 11) }}</span></span></nuxt-link>
    <h3>{{ info.comTitle }}</h3>
    <p>{{ info.comment }} </p>
    <ratingC :info="info"></ratingC>
    <div id="myModal" class="modl"><showMapC class="modlbox" @closeMod="closeMod()"></showMapC></div>
    <showCommentsC :info="info"></showCommentsC>
    <showInfoC :info="info"></showInfoC>
    </div>
</template>
<script>
  import firebaseApp from '~/firebaseapp'
  import ratingC from '~/components/post/ratingC'
  import starsC from '~/components/post/starsC'
  import showMapC from '~/components/post/showMapC'
  import showCommentsC from '~/components/post/showCommentsC'
  import showInfoC from '~/components/post/showInfoC'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    props: ['info'],
    data () {
      return {
        mapRef: '#' + this.info.post_id,
        src: this.info.src,
        loadingImage: true,
        loadedImage: false,
        userData: '',
        userPage: ''
      }
    },
    methods: {
      ...mapActions(['bindFirebaseComments', 'setCoordinates']),
      showBill (n) {
        var x = parseInt(n)
        if (x === 0) {
          return '0 - 10 €'
        } else {
          return x + '0 - ' + (x + 1) + '0 €'
        }
      },
      handleLoadedImage () {
        this.loadingImage = false
        this.loadedImage = true
      },
      setComments () {
        this.bindFirebaseComments(this.info.post_id)
      },
      setMod () {
        if (this.info.lng !== 0 && this.info.lat !== 0) {
          this.setCoordinates({ lng: this.info.lng, lat: this.info.lat })
          document.getElementById('myModal').style.visibility = 'visible'
        }
      },
      closeMod () {
        document.getElementById('myModal').style.visibility = 'hidden'
      }
    },
    components: {
      ratingC,
      starsC,
      showMapC,
      showCommentsC,
      showInfoC
    },
    computed: {
      ...mapGetters({
        userId: 'getUser'
      }),
      userDirect () {
        if (this.userId === this.info.user_id) {
          return 'profile'
        } else {
          return '/users/' + this.info.user_id
        }
      }
    },
    mounted () {
      let db = firebaseApp.database()
      db.ref('/users/' + this.info.user_id).once('value').then(snapshot => {
        if (snapshot.val()) { this.userData = snapshot.val() }
      })
    }
  }
</script>

<style scoped lang='scss'>
@import 'assets/sass/modalcss';
@import "assets/sass/colors.scss";
.locbut {
  background: none;
  padding: 0;
  margin: 0;
  border: 0;
  width: 100%;
}
img {
  width: 100%;
}
.ico { color: #a85122; }
.name { color:grey; }
.user {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}
.spinner {
  padding-top: 20%;
  padding-left: 47%;
  width: 100%;
  height: 300px;
}
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

.mainBloc h3 {
  word-wrap: break-word;
	overflow-wrap: break-word;
}

.titulo-star{
  display: flex;
  flex-flow: row wrap;
  font-size: 2rem;
  align-items: center;
  margin-top: 10px;
  white-space: pre-wrap;
}
.titulo-star h1{
  margin-right: 2%;
  color: $redTitle;
  word-wrap: break-word;
	overflow-wrap: break-word;
  max-width: 300px;
}
.titulo-star h5{
  margin-right: 3%;
}

.icoption{
  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: center;
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

.red {
  color: $redColor;
  font-weight:500;
}
@media screen and (min-width: 650px) {
  .modlbox {
    padding: 5px;
    width: 80%;
  }
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
    width: 33%;
    padding: 5px;
  }
}
</style>
