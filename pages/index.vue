<template>
  <div>
    <div v-if="isLoading"><tomato /></div>
    <div v-if="!isLoading">
      <pomodoro v-if="isAuthenticated"></pomodoro>
      <login v-if="!isAuthenticated"></login>
    </div>
  </div>
</template>
<script>
  import login from '~/pages/login'
  import pomodoro from '~/pages/pomodoro'
  import Tomato from '~/components/common/Tomato'

  export default {
    data () {
      return {
        isLoading: true,
        isAuthenticated: false
      }
    },
    components: {login, pomodoro, Tomato},
    beforeCreate () {
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  }
</script>
