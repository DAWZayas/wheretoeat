<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height">
      <div class="main-content row">
        <div class="col-sm-12 col-lg-8">
          <pomodoro-timer-settings></pomodoro-timer-settings>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import PomodoroTimerSettings from '~/components/settings/PomodoroTimerSettings'

  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      PomodoroTimerSettings
    }
  }
</script>
