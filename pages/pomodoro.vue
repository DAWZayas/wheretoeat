<template>
  <div>
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
