<template>
  <div>
    <button type="button" class="btn btn-info send" @click="loginWithFacebook">Log-in with Facebook</button>
    <button type="button" class="btn btn-warning send" @click="loginWithGoogle">Log-in with Google</button>
  </div>
</template>
<script type="text/javascript">
import firebaseApp from '~/firebaseapp'
import firebase from 'firebase'
export default {
  data () {
    return {
      error: ''
    }
  },
  methods: {
    loginWithFacebook () {
      this.loginWithProvider(new firebase.auth.FacebookAuthProvider())
    },
    loginWithGoogle () {
      this.loginWithProvider(new firebase.auth.GoogleAuthProvider())
    },
    loginWithProvider (provider) {
      firebaseApp.auth().signInWithPopup(provider)
      .then(result => this.$router.push('/profile'))
      .catch((error) => { this.error = error })
    },
    setError (error) {
      this.error = error.message
    }
  }
}
</script>
<style scoped lang='scss'>
.send {
  width: 85%;
  margin-top: 10px;
  height: 50px;
}
</style>
