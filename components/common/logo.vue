<template>
  <nuxt-link to="/">
    <img class="logo" :src="src" alt="Where To Eat">
  </nuxt-link>
</template>

<script type="text/javascript">

export default {
  data () {
    return {
      src: require('../../assets/logo.png')
    }
  }
}
</script>

<style scoped media="screen">
img {
  width: 100%;
}
</style>
