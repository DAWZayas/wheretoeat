<template>
  <div class="container">
    <headerC></headerC>
    <mainC></mainC>
    <asideC></asideC>
    <footerC>></footerC>
  </div>
</template>

<script type="text/javascript">

import { headerC, footerC, mainC, asideC } from '~/components/common'

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
@media screen and (min-width: 850px) { .container{ width: 80%;} }
</style>
