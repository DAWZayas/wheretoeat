<template>
  <div class="containe-r">
    <headerC></headerC>
    <searcherC></searcherC>
    <profileC></profileC>
    <profilePostsC></profilePostsC>
    <topButton></topButton>
    <footerC></footerC>
  </div>
</template>
<script>

import profileC from '~/components/profile/profileC'
import { headerC, footerC, topButton, searcherC } from '~/components/common'
import profilePostsC from '~/components/profile/profilePostsC'
import { mapActions } from 'vuex'

export default{
  data () {
    return {}
  },
  components: {
    headerC,
    profileC,
    topButton,
    footerC,
    profilePostsC,
    searcherC
  },
  methods: {
    ...mapActions(['bindFirebaseSetPost', 'bindFirebaseSetProfile'])
  },
  created () {
    this.bindFirebaseSetPost()
    this.bindFirebaseSetProfile()
  }
}
</script>

<style media="screen">
img{width: 100%;}

@media screen and (min-width: 750px) {
  .containe-r{
    width: 100%;
    display:flex;
	  flex-flow:row wrap;
  }

@media screen and (min-width: 1200px) {
  .containe-r{
    width: 85%;
    margin-left: 7.5%;
  }
}

}
</style>
