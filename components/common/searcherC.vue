<template>
    <div class="searcher">
      <input v-model="searchTerm" class="input" type="search" placeholder="Restaurante,Titulo...">
      <div class="searchBloc">
        <span @click="setSearch"><i class="material-icons">&#xe8b6;</i></span>
      </div>
  </div>

</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        searchTerm: ''
      }
    },
    methods: {
      ...mapActions(['bindSearch']),
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
<style scoped media="screen">
@import "assets/sass/colors.scss";
.searcher {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}

.searcher a i{
  color: black;
  font-size: 1.8em;
}

input {
  width: 90%;
  padding: 5px;
  padding-left: 10px;
  color: grey;
}

.searchBloc {
  width: 10%;
  text-align: center;
}

@media screen and (min-width: 800px) {

  .searcher {
    display: none;
  }
}

</style>
