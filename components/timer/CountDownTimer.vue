<template>
  <div class="content">
    <svg-circle-sector class="countdown-timer col-sm-12 col-md-10 col-lg-6" :angle="angle" :text="text"></svg-circle-sector>
    <div class="controls">
      <div class="btn-group" role="group">
        <button type="button" :class="{disabled: state === 0}" class="btn btn-link"><img :src="playIcon" /></button>
        <button type="button" :class="{disabled: state === 1 || state === 2}" class="btn btn-link"><img :src="pauseIcon" /></button>
        <button type="button" :class="{disabled: state === 2}" class="btn btn-link btn-stop"><img :src="stopIcon" /></button>
      </div>
    </div>
  </div>
</template>
<script>
  import SvgCircleSector from '~/components/timer/SvgCircleSector'
  import {leftPad} from '~/utils/utils'
  const STATE = {
    STARTED: 0,
    PAUSED: 1,
    STOPPED: 2
  }

  export default {
    props: ['time'],
    data () {
      return {
        timestamp: this.time,
        state: STATE.STOPPED,
        playIcon: require('@/assets/images/play_icon.svg'),
        pauseIcon: require('@/assets/images/pause_icon.svg'),
        stopIcon: require('@/assets/images/stop_icon.svg')
      }
    },
    computed: {
      minutes () {
        return Math.floor(this.timestamp / 60)
      },
      seconds () {
        return this.timestamp % 60
      },
      angle () {
        return 45
      },
      text () {
        return `${leftPad(this.minutes)}:${leftPad(this.seconds)}`
      }
    },
    components: {
      SvgCircleSector
    },
    methods: {
    },
    watch: {
      time () {
        this.timestamp = this.time
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/styles/vendors/flex";
  @import "../../assets/styles/utils/module";
  .content {
    @extend .center-content;
    @include flex-direction(column);
  }
  .controls .btn {
    cursor: pointer;
  }
</style>
