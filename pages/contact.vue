<template>
  <div class="containe-r">
    <headerC></headerC>
    <searcherC></searcherC>
    <contactC></contactC>
    <topButton></topButton>
    <footerC></footerC>
  </div>
</template>

<script>

import contactC from '~/components/contactC'
import { headerC, footerC, topButton, searcherC } from '~/components/common'

export default{
  data () {
    return {}
  },
  components: {
    headerC,
    contactC,
    topButton,
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

@media screen and (min-width: 1200px) {
  .containe-r{
    width: 85%;
    margin-left: 7.5%;
  }
}

}
</style>
