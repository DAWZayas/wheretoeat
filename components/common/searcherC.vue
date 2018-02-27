<template>
    <div class="searcher">
      <input type="text" ref="words" placeholder="restaurante,ciudad,plato...">
      <div class="searchBloc">
        <a href="#" @click="searchRestaurants"><i class="material-icons">&#xe8b6;</i></a>
      </div>
  </div>

</template>
<script type="text/javascript">
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      filterText: 'Busqueda filtrada',
      showFilterWin: false,
      latLng: {},
      lat: '',
      lng: '',
      rating: -1,
      bill: -1
    }
  },
  methods: {
    ...mapActions(['setMainPosts']),
    searchRestaurants () {
      let searchWords = this.$refs.words.value
      if (searchWords !== '') {
        this.setMainPosts({ type: 'wordList', words: searchWords, bill: this.bill, points: this.rating })
        this.$router.push({path: '/search/' + 'query', query: { words: searchWords }})
      }
    }
  }
}
</script>
<style scoped media="screen">
@import "assets/sass/colors.scss";
.searcher {
  width: 100%;
  margin-top: 5px;
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
