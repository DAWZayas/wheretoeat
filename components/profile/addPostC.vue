<template>
  <div>
    <h2>Subir publicación</h2>
    <h5>Imagen</h5>
    <input @change="imgRef($event.target.files)" type="file" ref="imageFile">
    <div class="blocinf">
      <div class="cel">
        <h5>Restaurante</h5>
        <input type="text" v-model="title" maxlength="24" placeholder="titulo..">
      </div>
      <div class="cel">
        <h5>Titulo post</h5>
        <input type="text" v-model="comTitle" maxlength="30" placeholder="titulo..">
      </div>
    </div>
    <h5>Descripción</h5>
    <textarea v-model="comment" maxlength="200" placeholder="tu experiencia.."></textarea>
    <div class="blocinf">
      <div class="cel">
        <h5>Precio Medio</h5>
        <select v-model="bill">
          <option value="0">0 - 10 €</option>
          <option v-for="n in 9" :value="n">{{n}}0 - {{n+1}}0 €</option>
        </select>
      </div>
      <div class="cel">
        <h5>Valoración</h5>
        <select v-model="points">
          <option v-for="n in 10" :value="n">{{n}}</option>
        </select>
      </div>
    </div>
    <div class="blocinf">
      <div class="cel">
        <h5>Añadir localización</h5>
        <button type="button" @click="setMod" id="myBtn2" class="btn btn-info">Buscar en Google Maps</button>
      </div>
      <div class="cel">
        <h5 style="color:white; background:white;">.</h5>
        <button @click="onAddNewPost" data-toggle="modal" type="button" class="btn btn-danger" style="width:100%;">Subir post</button>
      </div>
      <div class="fillF">
        <h5>{{this.fillField}}</h5>
      </div>
      <addPostConfirmC :initialShow="showModal" @onCloseModal="setModalState"></addPostConfirmC>
    </div>
    <div id="myModal2" class="modl"><addLocationC @closeMod="closeMod()" @setCoor="setCoordinates($event)"></addLocationC></div>
  </div>
</template>
<script type="text/javascript">
import addPostConfirmC from '~/components/profile/addPostConfirmC'
import { mapActions, mapGetters } from 'vuex'
import addLocationC from '~/components/profile/addLocationC'
export default {
  data () {
    return {
      photoURL: 'https://firebasestorage.googleapis.com/v0/b/wheretoeat-ca57a.appspot.com/o/defaultImages%2Fempty.png?alt=media&token=5ea847ec-0c84-477d-9635-313d4acf73cd',
      tarjet: '',
      imgref: '',
      title: '',
      points: 5,
      bill: 0,
      comTitle: '',
      comment: '',
      showModal: false,
      fillField: '',
      loaded: false,
      postId: '',
      lat: 0,
      lng: 0
    }
  },
  computed: {
    ...mapGetters({ userId: 'getUser' })
  },
  methods: {
    ...mapActions(['addNewPost', 'uploadImage']),
    setCoordinates (data) {
      this.lat = data.lat
      this.lng = data.lng
      this.closeMod()
    },
    imgRef (file) {
      this.tarjet = file
    },
    onAddNewPost () {
      if (this.title === '' || this.comTitle === '' || this.comment === '') {
        this.fillField = '**Tienes que rellenar todos los campos'
      } else {
        var char = /[^a-zA-Z 0-9]+/g
        this.title = this.title.replace(char, ' ')
        this.comTitle = this.comTitle.replace(char, ' ')
        this.comment = this.comment.replace(char, ' ')
        this.postId = Math.random().toString(36).replace('0.', '') + Date.now().toString(36)
        const newPost = {
          src: this.photoURL,
          location: '(googleMaps)',
          title: this.title,
          points: this.points,
          bill: this.bill,
          comTitle: this.comTitle,
          comment: this.comment,
          tlf: '123 456 789',
          post_id: this.postId,
          user_id: this.userId,
          date: '',
          lat: this.lat,
          lng: this.lng
        }
        if (this.tarjet !== '') {
          this.uploadImage({files: [...this.tarjet], folder: 'postImages'}).then(picUrls => {
            newPost.src = picUrls[0]
            this.addNewPost(newPost)
            this.$refs.imageFile.value = null
            this.loaded = true
          })
        } else {
          this.addNewPost(newPost)
        }
        this.showModal = true
        this.title = ''
        this.points = 5
        this.bill = 0
        this.comTitle = ''
        this.comment = ''
        this.fillField = ''
        this.photoURL = 'https://firebasestorage.googleapis.com/v0/b/wheretoeat-ca57a.appspot.com/o/defaultImages%2Fempty.png?alt=media&token=5ea847ec-0c84-477d-9635-313d4acf73cd'
        this.tarjet = ''
        this.$refs.imageFile.value = null
        this.postId = ''
        this.lat = ''
        this.lng = ''
      }
    },
    setModalState () { this.showModal = false },
    setMod () {
      document.getElementById('myModal2').style.visibility = 'visible'
      document.getElementsByClassName('modl')[0].style.opacity = '1'
    },
    closeMod () {
      document.getElementById('myModal2').style.visibility = 'hidden'
      document.getElementsByClassName('modl')[0].style.opacity = '0'
    }
  },
  components: {
    addPostConfirmC,
    addLocationC
  }
}
</script>
<style scoped lang='scss'>
@import 'assets/sass/modalcss';
@import "assets/sass/colors.scss";

.modl {
  transition: all 0.5s linear;
  opacity: 0;
}

.fillF {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.fillF h5 {
  background-color: #E5BE5C;
  border-radius: 5px;
}

.cel {
  padding: 10px;
  width: 100%;
  border-top:1px solid #E9E9E9;
}

select {
  width: 90%;
  height: 40px;
  padding: 5px;
}

h5 {
  font-weight:200;
  margin-top: 10px;
  font-size: 16px;
  background-color: #E9E9E9;
  padding: 5px;
}

input {
  width: 100%;
  height: 40px;
  padding: 5px;
}

textarea {
  width: 100%;
  padding: 10px;
}

@media screen and (min-width: 750px) {
  .blocinf {
    display: flex;
    flex-flow: row wrap;
  }
  .cel {
    width: 100%;
  }
}
@media screen and (min-width: 1200px) {
  .cel {
    width: 50%;
  }
}
</style>
