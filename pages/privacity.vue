<template lang="html">
  <div class="containe-r">
    <headerC></headerC>
    <searcherC></searcherC>
    <privacityC></privacityC>
    <topButton></topButton>
    <footerC></footerC>
  </div>
</template>

<script>

import privacityC from '~/components/privacityC'
import { headerC, topButton, footerC, searcherC } from '~/components/common'

export default{
  data () {
    return {}
  },
  components: {
    headerC,
    topButton,
    footerC,
    privacityC,
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

@media screen and (min-width: 1200px) {
  .containe-r{
    width: 85%;
    margin-left: 7.5%;
  }
}

}
</style>
