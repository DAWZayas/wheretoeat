<template>
  <div class="containe-r">
    <headerC></headerC>
    <mainC></mainC>
    <asideC></asideC>
    <footerC>></footerC>
  </div>
</template>

<script type="text/javascript">

import { headerC, footerC } from '~/components/common'
import mainC from '~/components/mainC'
import asideC from '~/components/asideC'

export default {
  data () {
    return {}
  },
  components: {
    headerC,
    footerC,
    mainC,
    asideC
  }
}
</script>

<style media="screen">
@media screen and (min-width: 850px) {
  .containe-r{
    width: 80%;
    margin-left: 10%;

    }
  }
</style>
