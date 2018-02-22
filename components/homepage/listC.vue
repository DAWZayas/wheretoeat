<template>
  <div class="listBloc">
      <singleC v-for="info in mainPosts.slice(0, 9)" :key="info.date" v-if="info.date" :info="info" :show="false"></singleC>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import singleC from '~/components/post/singleC'
  export default {
    data () {
      return {
      }
    },
    methods: {
      ...mapActions(['setMainPosts'])
    },
    components: {
      singleC
    },
    computed: {
      ...mapGetters({ mainPosts: 'getMainPosts' })
    },
    mounted () {
      this.setMainPosts({type: 'mainlist', cords: ''})
    }
  }
</script>

<style scoped media="screen">
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
