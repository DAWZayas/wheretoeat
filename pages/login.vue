<template>
  <div class="containe-r">
    <headerC></headerC>
    <loginC></loginC>
    <topButton></topButton>
    <footerC></footerC>
  </div>
</template>

<script>

import loginC from '~/components/loginC'
import { headerC, footerC, topButton } from '~/components/common'

export default{
  data () {
    return {}
  },
  components: {
    headerC,
    loginC,
    topButton,
    footerC
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
