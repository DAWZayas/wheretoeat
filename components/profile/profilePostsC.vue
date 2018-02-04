<template>
  <div class="contain">
    <div class="listBloc">
      <singleC v-for="info in userPosts" :key="info.date" v-if="info.date" :info="info"></singleC>
    </div>
    <div class="showmore" v-if="nPosts"><button @click="showMore" type="button" class="btn btn-info">Mostrar mas</button></div>
  </div>
</template>
<script>
  import singleC from '~/components/post/singleC'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        showPag: 7
      }
    },
    components: {
      singleC
    },
    methods: {
      ...mapActions(['bindFirebaseSetProfile']),
      showMore () {
        this.showPag = this.showPag + 6
        this.bindFirebaseSetProfile({uid: this.userId, pag: this.showPag})
      }
    },
    computed: {
      ...mapGetters({
        userPosts: 'profilePosts',
        numPosts: 'getNumPosts',
        userId: 'getUser'
      }),
      nPosts () {
        if (this.numPosts <= 7 || this.showPag > this.numPosts) {
          return false
        } else {
          return true
        }
      }
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
.contain {
  width: 100%;
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
