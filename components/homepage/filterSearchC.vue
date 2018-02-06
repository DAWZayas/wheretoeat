<template>
    <div class="col">
      <div>
        <h5>Busqueda personalizada</h5>
        <input v-model="searchTerm" type="input" placeholder="nombre del restaurante..">
        <input type="text" placeholder="ciudad..">
        <button @click="setSearch" type="button" class="btn btn-danger send">Buscar</button>
        <h5>Filtros</h5>
        <div class="login">
        <div class="cel">
          <h6>Precio Medio</h6>
          <select v-model="bill">
            <option value="0">0 - 10 €</option>
            <option v-for="n in 9" :value="n">{{n}}0 - {{n+1}}0 €</option>
          </select>
        </div>
        <div class="cel">
          <h6>Valoración</h6>
          <select v-model="points">
            <option value="0">Omitir</option>
            <option v-for="n in 10" :value="n">{{n}}</option>
          </select>
        </div>
        </div>
      </div>
        <button @click="setFilterSearch" type="button" class="btn btn-danger send">Buscar Por Filtros</button>
        <button type="button" class="btn btn-info send">Restaurantes cerca de mí</button>
      </div>
    </div>
</template>
<script type="text/javascript">
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      searchTerm: '',
      bill: 0,
      points: 0
    }
  },
  methods: {
    ...mapActions(['bindSearch']),
    setFilterSearch () {
      const toSearch = {
        type: 'filter',
        bill: this.bill,
        points: this.points
      }
      this.bindSearch(toSearch)
      this.$router.push({ path: '/result' })
    },
    setSearch () {
      if (this.searchTerm) {
        const toSearch = {
          type: 'normal',
          searchTerm: this.searchTerm.toLowerCase()
        }
        this.bindSearch(toSearch)
        this.$router.push({ path: '/result' })
      }
    }
  }
}
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";

.login {
  display: flex;
  flex-flow: row nowrap;
}
.cel {
  width: 50%;
}

select {
  width: 90%;
  height: 40px;
  padding: 5px;
}
.fillF {
  width: 85%;
}

.fillF h5 {
  background-color: #E5BE5C;
  border-radius: 5px;
  padding: 5px;
}

aside .col {
  width: 100%;
}

.send {
  width: 100%;
  margin-top: 10px;
  height: 50px;
}

.log {
  background-color: #c0b386;
  border: none;
}

.log:hover {
  background-color: #9a8f67;
}

input {
  width: 100%;
  height: 50px;
  padding: 5px;
  margin-top: 15px;
}

h5 {
  background-color: #00a4ba;
  padding: 5px;
  margin-top: 15px;
  color: white;
  font-weight: 300;
}

</style>
