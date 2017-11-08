<template>
  <div class="containe-r">
    <headerC></headerC>
    <mainC></mainC>
    <asideC></asideC>
    <listC></listC>
    <footerC></footerC>
  </div>
</template>

<script type="text/javascript">

import { headerC, footerC } from '~/components/common'
import mainC from '~/components/mainC'
import asideC from '~/components/asideC'
import listC from '~/components/listC'

export default {
  data () {
    return {}
  },
  components: {
    headerC,
    footerC,
    mainC,
    asideC,
    listC
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
