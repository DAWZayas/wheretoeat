<template>
  <div>
    <pomodoro v-if="isAuthenticated"></pomodoro>
    <login v-if="!isAuthenticated"></login>
  </div>
</template>
<script>
  import login from '~/pages/login'
  import pomodoro from '~/pages/pomodoro'
  
  export default {
    data () {
      return {
        isAuthenticated: false
      }
    },
    components: {login, pomodoro}
  }
</script>
