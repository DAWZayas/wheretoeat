<template>
  <div>
    <logo></logo>
    <nuxt-link to="/">Inicio</nuxt-link>
    <nuxt-link to="#">TuZona</nuxt-link>
    <nuxt-link to="#">Registrate</nuxt-link>
    <nuxt-link to="#"><i class="material-icons">&#xe8b6;</i></nuxt-link>
    <nuxt-link to="#"><i class="material-icons">&#xe7fd;</i></nuxt-link>
  </div>
</template>

<script type="text/javascript">

import logo from '~/components/common/logo'
export default {
  name: 'header-component',
  components: {
    logo
  }
}

</script>
