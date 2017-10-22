<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height">
      <div class="main-content row">
        <div class="col-sm-12">
          <h2 class="title">Statistics</h2>
          <p>Total Pomodoros: {{totalPomodoros}}</p>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  export default {
    data () {
      return {
        totalPomodoros: 5
      }
    },
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
