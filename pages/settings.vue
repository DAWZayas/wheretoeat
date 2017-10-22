<template>
  <div>
    <header-component></header-component>
    Settings
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'

  export default {
    components: {
      FooterComponent,
      HeaderComponent
    }
  }
</script>
<style lang="scss">
</style>
