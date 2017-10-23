<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height">
      <div class="main-content row">
        <div class="countdown-holder col-sm-12" v-bind:class="[state !== 0 ? 'col-md-6 col-lg-7' : 'col-md-12']">
          <count-down-timer ref="countdowntimer" @finished="togglePomodoro" :time="time"></count-down-timer>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import CountDownTimer from '~/components/timer/CountDownTimer'
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import { beep } from '~/utils/utils'

  const STATE = {
    WORKING: 0,
    SHORT_BREAK: 1,
    LONG_BREAK: 2
  }
  export default {
    data () {
      return {
        state: STATE.WORKING,
        pomodoros: 0,
        config: {
          workingPomodoro: 0.2,
          shortBreak: 0.1,
          longBreak: 0.3,
          pomodorosTillLongBreak: 3
        }
      }
    },
    computed: {
      time () {
        let minutes

        switch (this.state) {
          case STATE.WORKING:
            minutes = this.config.workingPomodoro
            break
          case STATE.SHORT_BREAK:
            minutes = this.config.shortBreak
            break
          case STATE.LONG_BREAK:
            minutes = this.config.longBreak
            break
          default:
            minutes = this.config.workingPomodoro
            break
        }

        return minutes * 60
      }
    },
    components: {
      FooterComponent,
      HeaderComponent,
      CountDownTimer
    },
    methods: {
      togglePomodoro () {
        beep()
        switch (this.state) {
          case STATE.WORKING:
            // we have switched to the break state, increase the number of pomodoros and choose between long and short break
            this.pomodoros ++
            this.state = this.pomodoros % this.config.pomodorosTillLongBreak === 0
              ? STATE.LONG_BREAK : STATE.SHORT_BREAK
            alert('Time for exercise!')
            break
          default:
            // time to work!
            this.state = STATE.WORKING
            alert('Time to work!')
            break
        }
        this.$refs.countdowntimer.start()
      },
      toggleKittens () {
        this.showKittens = !this.showKittens
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/base/fontSizes";

  .title {
    margin: 10px 0;
  }
  .description {
    margin: 20px 0;
    color: #999;
  }
  .button-primary {
    width: 47.5%;
    margin: 0;

    &:first-of-type {
      margin-right: 5%;
      padding: 0;
      float: left;
    }
  }
  .lazy-section {
    margin-top: 40px;

    .title {
      font-size: $font-size-medium;
    }
  }
</style>
