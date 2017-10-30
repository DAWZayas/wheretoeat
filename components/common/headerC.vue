<template>
  <div class="header">
    <div class="logo">
      <logo></logo>
    </div>
    <nav>
      <nuxt-link to="#"><i class="material-icons">&#xe5d2;</i></nuxt-link>
      <nuxt-link to="#"><i class="material-icons">&#xe8b6;</i></nuxt-link>
    </nav>

    <div class="menu">
      <div class="userch">
        <nuxt-link to="#"><i class="material-icons">&#xe7fd;</i></nuxt-link>
        <nuxt-link to="#"><i class="material-icons">&#xe8b6;</i></nuxt-link>
      </div>
      <nuxt-link to="#" class="line">TuZona</nuxt-link>
      <nuxt-link to="#" class="line">Registrate</nuxt-link>
      <nuxt-link to="/" class="line">Inicio</nuxt-link>
    </div>

  </div>
</template>

<script type="text/javascript">

import logo from '~/components/common/logo'
export default {
  name: 'headerC',
  components: {
    logo
  }
}
</script>
