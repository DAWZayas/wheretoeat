<template>
  <div class="containe-r">
    <headerC></headerC>
    <searcherC></searcherC>
    <profileInfoC :infoUser="this.infoUser" class="prof"></profileInfoC>
    <div class="col"></div>
    <div class="posts"><h1>Sus publicaciones</h1></div>
    <div class="listBloc"><singleC v-for="info in this.userPosts" :key="info.src" v-if="info.src" :info="info"></singleC></div>
    <footerC></footerC>
    <div v-if="isLoading" class="load"><img src="~/assets/oval.svg" width="80" alt=""></div>
  </div>
</template>
<script>
import Vue from 'vue'
import { headerC, footerC, searcherC } from '~/components/common'
import singleC from '~/components/post/singleC'
import profileInfoC from '~/components/profile/profileInfoC'
import { mapActions, mapGetters } from 'vuex'
import firebaseApp from '~/firebaseapp'

export default{
  data () {
    return {
      isLoading: true,
      infoUser: ''
    }
  },
  components: {
    headerC,
    footerC,
    searcherC,
    profileInfoC,
    singleC
  },
  methods: {
    ...mapActions(['bindFirebaseVPosts'])
  },
  computed: {
    ...mapGetters({ userPosts: 'getVPosts' }),
    ...mapActions(['bindAuth', 'unbindFirebaseReferences'])
  },
  mounted () {
    Vue.nextTick(() => {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      setTimeout(() => {
        this.isLoading = false
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
      }, 1500)
    })
  },
  created () {
    this.bindAuth
    firebaseApp.database().ref('/users/' + this.$route.params.uid).once('value').then(snapshot => { if (snapshot.val()) { this.infoUser = snapshot.val() } })
    this.bindFirebaseVPosts(this.$route.params.uid)
  },
  destroyed () {
    this.unbindFirebaseReferences
  }
}
</script>

<style scoped media="screen">
/* @import "assets/sass/colors.scss"; */
.listBloc{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.posts {
  width:100%;
  padding:10px;
  margin-bottom:-3%;
}

h1 {
  color: $redColor;
  margin-bottom: 4%;
}

img {
  width: 100%;
}
.load {
  padding-top: 20%;
  padding-left: 47%;
  z-index: 1;
  position: absolute;
  width: 100%;
  height:100%;
  background-color: rgba(255,255,255,0.8);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
@media screen and (min-width: 650px) {
  .listBloc {
    display: flex;
    flex-flow: row wrap;
  }
  .listBloc > .mainBloc {
    border-style: none;
  }
  .containe-r{
    width: 100%;
    display:flex;
	  flex-flow:row wrap;
  }
}
</style>
