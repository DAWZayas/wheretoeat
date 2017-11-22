<template>
  <div>
    <h2>Subir publicación</h2>
    <h5>Imagen</h5>
    <input type="file" name="" value="">
    <div class="blocinf">
      <div class="cel">
        <h5>Restaurante</h5>
        <input type="text" v-model="title" @keydown="limiter($event, 25)" placeholder="titulo..">
      </div>
      <div class="cel">
        <h5>Titulo post</h5>
        <input type="text" v-model="comTitle" @keydown="limiter($event, 30)" placeholder="titulo..">
      </div>
    </div>
    <h5>Descripción</h5>
    <textarea v-model="comment" @keydown="limiter($event, 200)" placeholder="tu experiencia.."></textarea>
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
        <button type="button" class="btn btn-info">Buscar en Google Maps</button>
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
  </div>
</template>
<script type="text/javascript">
import addPostConfirmC from '~/components/profile/addPostConfirmC'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      title: '',
      points: 5,
      bill: 0,
      comTitle: '',
      comment: '',
      showModal: false,
      fillField: ''
    }
  },
  methods: {
    ...mapActions(['addNewPost']),
    onAddNewPost () {
      if (this.title === '' || this.comTitle === '' || this.comment === '') {
        this.fillField = '**Tienes que rellenar todos los campos'
      } else {
        var char = /[^a-zA-Z 0-9]+/g
        this.title = this.title.replace(char, ' ')
        this.comTitle = this.comTitle.replace(char, ' ')
        this.comment = this.comment.replace(char, ' ')

        const newPost = {
          id: 4,
          src: 'empty',
          location: '(googleMaps)',
          title: this.title,
          points: this.points,
          bill: this.bill,
          comTitle: this.comTitle,
          comment: this.comment,
          showButton: true,
          tlf: '123 456 789'
        }
        this.addNewPost(newPost)
        this.showModal = true
        this.title = ''
        this.points = 5
        this.bill = 0
        this.comTitle = ''
        this.comment = ''
        this.fillField = ''
      }
    },
    setModalState () {
      this.showModal = false
    },
    limiter (evt, lim) {
      if (this.title.length > lim || this.comTitle.length > lim || this.comment.length > lim) {
        evt.preventDefault()
        return
      }
    }
  },
  components: {
    addPostConfirmC
  }
}
</script>
<style scoped media="screen">
@import "assets/sass/colors.scss";

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
