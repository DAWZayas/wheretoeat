<template>
  <div class="listBloc">
      <singleC v-for="info in userPosts" :key="info.src" v-if="info.src" :info="info"></singleC>
  </div>
</template>
<script>
  import singleC from '~/components/post/singleC'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    components: {
      singleC
    },
    computed: {
      ...mapGetters({
        userPosts: 'profilePosts'
      })
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
