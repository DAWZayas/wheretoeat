<template>
  <div>
    Hello Nuxt!
    <pomodoro></pomodoro>
  </div>
</template>
<script>
  import pomodoro from '~/pages/pomodoro'

  export default {
    data () {
      return {}
    },
    components: {pomodoro}
  }
</script>
