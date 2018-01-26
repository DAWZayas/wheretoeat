<template>
  <div class="">
  <div class="listBloc">
      <singleC v-for="info in userPosts" :key="info.src" v-if="info.src" :info="info"></singleC>
  </div>
  <div class="showmore"><button @click="showMore" type="button" class="btn btn-info">Mostrar mas</button></div>
  </div>
</template>
<script>
  import singleC from '~/components/post/singleC'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        showPag: 13
      }
    },
    components: {
      singleC
    },
    methods: {
      ...mapActions(['showMorePosts']),
      showMore () {
        this.showMorePosts(this.showPag)
        this.showPag = this.showPag + 6
      }
    },
    computed: {
      ...mapGetters({
        userPosts: 'profilePosts'
      })
    }
  }
  </script>

<style scoped media="screen">
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
