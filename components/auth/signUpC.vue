<template>
    <div class="col left">
      <h1>Regístrate</h1>
      *Todos los campos son obligatorios
      <div class="login">
        <h5>Nombre de usuario</h5>
        <input type="text" v-model="userName" maxlength="15" placeholder="nombre de usuario"><i class="material-icons ico">&#xe7fd;</i>
        <h5>Contraseña</h5>
        <input type="password" v-model="password" maxlength="20" placeholder="contraseña"><i class="material-icons ico">&#xE899;</i>
        <h5>Repetir contraseña</h5>
        <input type="password" v-model="repeatPassword" maxlength="20" placeholder="repetir contraseña"><i class="material-icons ico">&#xE899;</i>
        <div v-if="showPassAdv" class="fillF"><h5>{{this.passwordAlert}}</h5></div>
        <h5>E-mail</h5>
        <input type="email" v-model="email" maxlength="30" placeholder="@"><i class="material-icons ico">&#xE878;</i>
        <div v-if="showEmailAdv" class="fillF"><h5>{{this.emailAlert}}</h5></div>
        <h5>Ciudad</h5>
        <input type="text" v-model="city" maxlength="30" placeholder="ciudad"><i class="material-icons ico">&#xE88A;</i>
        <div class="conditions">
          <input type="checkbox" v-model="termsCheck" style="width:5%;"><span>Acepto términos y condiciones de uso</span>
        </div>
        <button type="button" @click="onAddNewUser" class="btn btn-info send">Registrarse</button>
      </div>
      <div v-if="showFieldAdv" class="fillF"><h5>{{this.fillField}}</h5></div>
    </div>
</template>
<script type="text/javascript">

import { mapActions } from 'vuex'
import { fieldFilter, emailTest, isEmpty } from '~/utils/utils'
export default {
  data () {
    return {
      userName: '',
      password: '',
      repeatPassword: '',
      email: '',
      city: '',
      fillField: '',
      emailAlert: '',
      passwordAlert: '',
      showFieldAdv: false,
      showEmailAdv: false,
      showPassAdv: false,
      termsCheck: []
    }
  },
  methods: {
    ...mapActions(['createUserAuth']),
    onAddNewUser () {
      this.showFieldAdv = false
      this.showPassAdv = false
      this.showEmailAdv = false
      const obj = {userName: this.userName, password: this.password, repeatPassword: this.repeatPassword, email: this.email, city: this.city}
      if (isEmpty(obj)) {
        this.showFieldAdv = true
        this.fillField = '**Tienes que rellenar todos los campos'
      } else {
        if (this.password !== this.repeatPassword) {
          this.showPassAdv = true
          this.passwordAlert = '**Las contraseñas no son iguales'
        } else if (!emailTest(this.email)) {
          this.showEmailAdv = true
          this.emailAlert = '**Email incorrecto'
        } else if (this.termsCheck.length === 0) {
          this.showFieldAdv = true
          this.fillField = '**Debes aceptar los términos y condiciones'
        } else {
          this.confirmed = true
          this.userName = fieldFilter(this.userName)
          this.password = fieldFilter(this.password)
          this.repeatPassword = fieldFilter(this.repeatPassword)
          this.city = fieldFilter(this.city)

          const newUser = {
            username: this.userName,
            password: this.password,
            repeatPassword: this.repeatPassword,
            email: this.email,
            city: this.city,
            followers: 0,
            src: 'https://firebasestorage.googleapis.com/v0/b/wheretoeat-ca57a.appspot.com/o/defaultImages%2Fprofile.jpg?alt=media&token=a4d0d1f4-03c4-409c-bdb6-de7f81a533a3'
          }
          let method = this.createUserAuth
          method({email: this.email, password: this.password, newUser})
          this.$router.push('/profile')
        }
      }
    }
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
