<template>
  <div class="">
    <h1>Publicaciones favoritas</h1>
    <div class="listBloc" v-if="favoritePosts.length>0">
      <singleC v-for="info in favoritePosts" :key="info.post_id" :info="info"></singleC>
    </div>
    <h2 class="result" v-if="favoritePosts.length===0">No hay resultados que mostrar...</h2>
    <div class="showmore"><button @click="showMore" type="button" class="btn btn-info">Mostrar mas</button></div>
  </div>
</template>
<script>
  import singleC from '~/components/post/singleC'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        showPag: 13,
        showF: false
      }
    },
    components: {
      singleC
    },
    methods: {
      ...mapActions(['showMorePosts', 'favoritePostsA']),
      showMore () {
        this.showMorePosts(this.showPag)
        this.showPag = this.showPag + 6
      }
    },
    computed: {
      ...mapGetters({
        favoritePosts: 'getFavoritePosts'
      })
    },
    mounted () {
      this.favoritePostsA()
    }
  }
  </script>

<style scoped media="screen" lang="scss">
@import "assets/sass/colors.scss";
h1 {
  color: $redColor;
  margin-bottom: 4%;
}
.showmore {
  text-align: center;
  margin: 50px;
}
.listBloc{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
@media screen and (min-width: 650px) {
  .listBloc {
    display: flex;
    flex-flow: row wrap;
  }
  .listBloc > .mainBloc {
    border-style: none;
  }
}
</style>
