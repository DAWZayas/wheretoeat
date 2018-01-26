<template>
  <div class="containe-r">
    <headerC></headerC>
    <searcherC></searcherC>
    <mainC></mainC>
    <asideC></asideC>
    <listC></listC>
    <topButtonC></topButtonC>
    <footerC></footerC>
  </div>
</template>

<script type="text/javascript">

import { headerC, footerC, searcherC, topButtonC } from '~/components/common'
import mainC from '~/components/homepage/mainC'
import asideC from '~/components/homepage/asideC'
import listC from '~/components/homepage/listC'
import { mapActions } from 'vuex'

export default {
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
    footerC,
    mainC,
    asideC,
    listC,
    topButtonC,
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
