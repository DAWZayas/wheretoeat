<template>
  <div class="containe-r">
    <headerC></headerC>
    <mainC></mainC>
    <asideC></asideC>
    <!--<sectionC></sectionC>-->
    <listC></listC>
    <footerC></footerC>
  </div>
</template>

<script type="text/javascript">

import { headerC, footerC } from '~/components/common'
import mainC from '~/components/mainC'
import asideC from '~/components/asideC'
import sectionC from '~/components/sectionC'
import listC from '~/components/listedComponents/listC'

export default {
  data () {
    return {}
  },
  components: {
    headerC,
    footerC,
    mainC,
    asideC,
    sectionC,
    listC
  }
}
</script>


<style media="screen">
img{width: 100%;}

@media screen and (min-width: 800px) {
  .containe-r{
    width: 80%;
    display:flex;
	  flex-flow:row wrap;
    margin-left: 10%;
  }

}
</style>
