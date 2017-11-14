<template>
  <div class="containe-r">
    <headerC></headerC>
    <searcherC></searcherC>
    <profileC></profileC>
    <myListC></myListC>
    <topButton></topButton>
    <footerC></footerC>
  </div>
</template>

<script>

import profileC from '~/components/profileC'
import { headerC, footerC, topButton, searcherC } from '~/components/common'
import myListC from '~/components/myListC'

export default{
  data () {
    return {}
  },
  components: {
    headerC,
    profileC,
    topButton,
    footerC,
    myListC,
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
