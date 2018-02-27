<template>
  <div>
    <div v-if="isLoading" class="load"><img src="~/assets/oval.svg" width="80" alt=""></div>
    <headerC></headerC>
    <searcherC></searcherC>
    <h3>{{nRestaurants}} resultados que coinciden con "{{words}}"</h3>
    <div class="listBloc">
      <singleC v-for="info in mainPosts" :key="info.date" v-if="info.date" :info="info" :show="false"></singleC>
    </div>
  </div>
</template>

<script>
import { headerC, searcherC } from '~/components/common'
import singleC from '~/components/post/singleC'
import { mapGetters, mapActions } from 'vuex'
export default{
  data () {
    return {
      isLoading: true,
      nRestaurants: 0,
      words: this.$route.query.words
    }
  },
  methods: {
    ...mapActions(['setMainPosts']),
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = marker.infoText

      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
      // if different marker set infowindow to open and reset current marker index
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },
    ancla (name) {
      return '#' + name
    }
  },
  computed: {
    ...mapGetters({ mainPosts: 'getMainPosts' }),
    ...mapActions(['bindAuth', 'unbindFirebaseReferences'])
  },
  components: {
    headerC,
    singleC,
    searcherC
  },
  mounted () {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    setTimeout(() => {
      this.isLoading = false
      document.getElementsByTagName('body')[0].style.overflow = 'visible'
    }, 2000)

    let c = 0
    this.mainPosts.forEach(info => {
      c++
    })
    this.nRestaurants = c
  },
  created () {
    this.bindAuth
  },
  destroyed () {
    this.unbindFirebaseReferences
  }
}
</script>
<style scoped media="screen">

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

h3{
  text-align: center;
  padding: 20px;
  color: #00a4ba;
}
.listBloc{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}

@media screen and (min-width: 650px) {
  .listBloc {
    display: flex;
    flex-flow: row wrap;
  }
}
</style>
