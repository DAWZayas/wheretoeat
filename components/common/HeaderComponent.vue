<template>
  <div>
    <logo></logo>
    <nuxt-link to="/">Home </nuxt-link>
    <nuxt-link to="about">About </nuxt-link>
    <nuxt-link to="settings">Settings </nuxt-link>
    <nuxt-link to="statistics">Statistics </nuxt-link>
    <nuxt-link to="workouts">Workouts </nuxt-link>
  </div>
</template>
<script>
  import Logo from '~/components/common/Logo'
  export default {

    name: 'header-component',
    components: {
      Logo
    }
  }
</script>
<style lang="scss">
</style>
