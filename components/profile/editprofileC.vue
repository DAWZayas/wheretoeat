<template>
    <div class="icol">
        <h2>Editar perfil</h2>
        <a @click="onClick"><div class="avatar" v-bind:style="showImg()"></div></a>
        <input @change="onChangeProfilePicture($event.target.files)" type="file" ref="imageFile">
        <h5>Nombre de usuario</h5>
        <input type="text" ref="username" :value="infoP.username"><i class="material-icons ico">&#xe7fd;</i>
        <h5>Ciudad</h5>
        <input type="text" ref="city" :value="infoP.city"><i class="material-icons ico">&#xE88A;</i>
        <h5>Sobre mi</h5>
        <textarea ref="info">{{infoP.info}}</textarea>
        <nuxt-link to="profile"><button @click="onEditProfile" type="button" class="btn btn-info">Editar perfil</button></nuxt-link>
        <nuxt-link to="profile"><button type="button" class="btn btn-danger align">Descartar cambios</button></nuxt-link>

    </div>
</template>
<script type="text/javascript">

import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      photoURL: ''
    }
  },
  methods: {
    ...mapActions(['editProfile', 'uploadImage', 'updatePhotoURL']),
    onEditProfile () {
      const newProfile = {
        src: this.infoP.src,
        username: this.$refs.username.value,
        city: this.$refs.city.value,
        info: this.$refs.info.value,
        followers: this.infoP.followers
      }
      this.editProfile(newProfile)
    },
    showImg () {
      return 'background-image: url(' + this.infoP.src + ')'
    },
    onChangeProfilePicture (files) {
      this.uploadImage({files: [...files], folder: 'profileImages'}).then(picUrls => {
        this.photoURL = picUrls[0]
        const newPhoto = {
          src: this.photoURL,
          username: this.$refs.username.value,
          city: this.$refs.city.value,
          info: this.$refs.info.value,
          followers: this.infoP.followers
        }
        this.updatePhotoURL(newPhoto)
        this.$refs.imageFile.value = null
      })
    },
    onClick () {
      let clickEvent = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      })
      this.$refs.imageFile.dispatchEvent(clickEvent)
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
