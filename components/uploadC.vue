<template>
  <div>
    <h2>Subir publicación</h2>
    <h5>Imagen</h5>
    <input type="file" name="" value="">
    <div class="blocinf">
      <div class="cel">
        <h5>Restaurante</h5>
        <input type="text" ref="name" placeholder="titulo..">
      </div>
      <div class="cel">
        <h5>Titulo post</h5>
        <input type="text" ref="title" placeholder="titulo..">
      </div>
    </div>
    <h5>Descripción</h5>
    <textarea ref="description" placeholder="tu experiencia.."></textarea>
    <div class="blocinf">
      <div class="cel">
        <h5>Precio Medio</h5>
        <select ref="bill">
          <option value="0">0 - 10 €</option>
          <option v-for="n in 9" :value="n">{{n}}0 - {{n+1}}0 €</option>
        </select>
      </div>
      <div class="cel">
        <h5>Valoración</h5>
        <select ref="rate">
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
        <button @click="onAddNewPost" type="button" class="btn btn-danger" style="width:100%;">Subir post</button>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['addNewPost']),
    onAddNewPost () {
      const newPost = {
        id: 4,
        img: require('~/assets/images/empty.png'),
        location: '(googleMaps)',
        title: this.$refs.name.value,
        points: this.$refs.rate.value,
        bill: this.$refs.bill.value,
        comTitle: this.$refs.title.value,
        comment: this.$refs.description.value,
        showButton: true,
        tlf: '123 456 789'
      }
      this.addNewPost(newPost)
    }
  }
}
</script>
<style scoped media="screen">

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
