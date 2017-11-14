<template>
    <div class="icol">
        <h2>Editar perfil</h2>
        <div class="avatar" v-bind:style="showImg()"></div>
        <input type="file" ref="img">
        <h5>Nombre</h5>
        <input type="text" ref="name" :value="infoP.name"><i class="material-icons ico">&#xE87C;</i>
        <h5>Nombre de usuario</h5>
        <input type="text" ref="username" :value="infoP.username"><i class="material-icons ico">&#xe7fd;</i>
        <h5>Ciudad</h5>
        <input type="text" ref="city" :value="infoP.city"><i class="material-icons ico">&#xE88A;</i>
        <h5>Edad</h5>
        <input type="text" ref="age" :value="infoP.age"><i class="material-icons ico">&#xE878;</i>
        <h5>Sobre mi</h5>
        <textarea ref="info">{{infoP.info}}</textarea>
        <button @click="onEditProfile" type="button" class="btn btn-info">Editar perfil</button>
        <nuxt-link to="profile"><button type="button" class="btn btn-danger align">Descartar cambios</button></nuxt-link>
    </div>
</template>
<script type="text/javascript">

import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['editProfile']),
    onEditProfile () {
      const newProfile = {
        img: require('~/assets/images/profile.jpg'),
        name: this.$refs.name.value,
        username: this.$refs.username.value,
        age: this.$refs.age.value,
        city: this.$refs.city.value,
        info: this.$refs.info.value
      }
      this.editProfile(newProfile)
    },
    showImg () {
      return 'background-image: url(' + this.infoP.img + ')'
    }
  },
  computed: {
    ...mapGetters({
      infoP: 'getProfile'
    })
  }
}
</script>
<style scoped media="screen">

.ico {
  margin-left: 10px;
}

.cel {
  padding: 10px;
  width: 50%;
  border-top:1px solid #E9E9E9;
}

input {
  width: 85%;
  height: 40px;
  padding: 5px;
}

select {
  width: 90%;
  height: 40px;
  padding: 5px;
}

h2 {
  color: #a85122;
}

h5 {
  font-weight:200;
  margin-top: 10px;
  font-size: 16px;
  background-color: #DBE5E6;
  padding: 5px;
  border-bottom-left-radius: 10px;
}

input {
  width: 85%;
  height: 40px;
  padding: 5px;
}

textarea {
  width: 100%;
  padding: 10px;
}
div.avatar {
    height: 200px;
    width: 200px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% auto;
    background-color: white;
}

.icol {
  padding: 10px;
  margin-top: 3%;
}

@media screen and (min-width: 750px) {

  .icol {
    width: 50%;
    margin-left: 25%;
    border-right: 2px solid #E9E9E9;
    border-top:1px solid #E9E9E9;
    border-radius: 20px;
  }
}
</style>
