<template>
  <div class="containe-r">
    <headerC></headerC>
    <searcherC></searcherC>
    <editprofileC></editprofileC>
    <footerC></footerC>
  </div>
</template>

<script>

import editprofileC from '~/components/profile/editprofileC'
import { headerC, footerC, searcherC } from '~/components/common'
import { mapActions } from 'vuex'

export default{
  data () {
    return {}
  },
  computed: {
    ...mapActions(['bindAuth', 'unbindFirebaseReferences'])
  },
  created () {
    this.bindAuth
  },
  destroyed () {
    this.unbindFirebaseReferences
  },
  components: {
    headerC,
    editprofileC,
    footerC,
    searcherC
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
}
</style>
