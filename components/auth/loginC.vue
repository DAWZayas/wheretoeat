<template>
  <div class="bloc">
    <div class="col">
      <h1>Accede</h1>
      <div class="login">
        <h5>Usuario</h5>
        <input type="text" v-model="userLog" placeholder="usuario"><i class="material-icons ico">&#xe7fd;</i>
        <h5>Contraseña</h5>
        <input type="password" v-model="passwordLog" placeholder="contraseña"><i class="material-icons ico">&#xE899;</i>
        <p>No recuerdas tu contraseña?</p>
        <button type="button" @click="loggin" class="btn btn-danger send">Log-in</button>
        <loginExternalC></loginExternalC>
        <div v-if="this.errorLog" class="fillF"><h5>{{this.errorLog}}</h5></div>
      </div>
    </div>
    <signUpC></signUpC>
  </div>
</template>
<script type="text/javascript">
import signUpC from '~/components/auth/signUpC'
import loginExternalC from '~/components/auth/loginExternalC'
import firebaseApp from '~/firebaseapp'
export default {
  data () {
    return {
      userLog: '',
      passwordLog: '',
      errorLog: ''
    }
  },
  methods: {
    loggin () {
      firebaseApp.auth().signInWithEmailAndPassword(this.userLog, this.passwordLog).then(user => {
        this.$router.push('/profile')
      }).catch(err => {
        this.errorLog = 'Datos incorrectos'
        console.log(err)
      })
    }
  },
  components: {
    signUpC,
    loginExternalC
  }
}
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";

.fillF {
  width: 85%;
}

.fillF h5 {
  background-color: #E5BE5C;
  border-radius: 5px;
  padding: 5px;
}

.conditions { display: flex;align-items: center;}

.ico {
  margin-left: 10px;
}

h1 {
  color: $redColor;
  margin-bottom: 4%;
}
h5 {
  font-weight:200;
  margin-top: 10px;
  font-size: 16px;
}

img{width: 100%;}

.send {
  width: 85%;
  margin-top: 10px;
  height: 50px;
}

.bloc {
  width: 100%;
  margin-top: 2%;
}
.col {
  padding: 30px;
  width: 100%;
  border-top:1px solid #E9E9E9;
}

input {
  width: 85%;
  height: 40px;
  padding: 5px;
}

@media screen and (min-width: 750px) {

  .bloc {
    display: flex;
    flex-flow: row nowrap;
  }
  .col {
    width: 50%;

  }
  .left {
    border-left: 2px solid #E9E9E9;
    border-top:1px solid #E9E9E9;
    border-radius: 20px;
  }
}

</style>
