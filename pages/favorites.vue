<template>
  <div class="containe-r">
    <headerC></headerC>
    <searcherC></searcherC>
    <favoritesC></favoritesC>
    <footerC></footerC>
    <div v-if="isLoading" class="load"><img src="~/assets/oval.svg" width="80" alt=""></div>
  </div>
</template>
<script>
import { headerC, footerC, searcherC } from '~/components/common'
import favoritesC from '~/components/profile/favoritesC'
import { mapActions } from 'vuex'

export default{
  data () {
    return {
      isLoading: true
    }
  },
  components: {
    headerC,
    footerC,
    searcherC,
    favoritesC
  },
  computed: {
    ...mapActions(['bindAuth', 'unbindFirebaseReferences'])
  },
  mounted () {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    setTimeout(() => {
      this.isLoading = false
      document.getElementsByTagName('body')[0].style.overflow = 'visible'
    }, 2000)
  },
  created () {
    this.bindAuth
  },
  destroyed () {
    this.unbindFirebaseReferences
  }
}
</script>

<style media="screen">
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
@media screen and (min-width: 750px) {
  .containe-r{
    width: 100%;
    display:flex;
	  flex-flow:row wrap;
  }
}
</style>
