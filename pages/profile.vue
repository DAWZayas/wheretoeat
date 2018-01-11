<template>
  <div class="containe-r">
    <headerC></headerC>
    <searcherC></searcherC>
    <profileC></profileC>
    <profilePostsC></profilePostsC>
    <footerC></footerC>
    <div v-if="isLoading" class="load"><img src="~/assets/oval.svg" width="80" alt=""></div>
  </div>
</template>
<script>

import profileC from '~/components/profile/profileC'
import { headerC, footerC, searcherC } from '~/components/common'
import profilePostsC from '~/components/profile/profilePostsC'
import { mapActions } from 'vuex'

export default{
  data () {
    return {
      isLoading: true
    }
  },
  components: {
    headerC,
    profileC,
    footerC,
    profilePostsC,
    searcherC
  },
  methods: {
    overflowVisible () {
      console.log('**')
      // document.getElementsByTagName('body')[0].style.overflow = 'visible'
    }
  },
  computed: {
    ...mapActions(['bindAuth', 'unbindFirebaseReferences'])
  },
  beforeCreate () {
    setTimeout(() => {
      this.isLoading = false
      this.overflowVisible()
    }, 2000)
  },
  created () {
    this.bindAuth
    /* this.$nextTick(function () {
      this.isLoading = false
    }) */
  },
  destroyed () {
    this.unbindFirebaseReferences
  }
}
</script>

<style media="screen">
/*
body {
  overflow: hidden;
}
*/
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
