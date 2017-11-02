<template>
  <div class="containe-r">
    <headerC></headerC>
    <mainC></mainC>
    <asideC></asideC>
    <sectionC></sectionC>
    <footerC></footerC>
  </div>
</template>

<script type="text/javascript">

import { headerC, footerC } from '~/components/common'
import mainC from '~/components/mainC'
import asideC from '~/components/asideC'
import sectionC from '~/components/sectionC'

export default {
  data () {
    return {}
  },
  components: {
    headerC,
    footerC,
    mainC,
    asideC,
    sectionC
  }
}
</script>


<style media="screen">
img{width: 100%;}

@media screen and (min-width: 850px) {
  .containe-r{
    width: 80%;
    display:flex;
	  flex-flow:row wrap;
    margin-left: 10%;
  }

}
</style>
