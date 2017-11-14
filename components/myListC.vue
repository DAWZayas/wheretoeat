<template>
  <div class="listBloc">
      <singleC v-for="info in myList" :key="info.title" :info="info"></singleC>
  </div>
</template>
<script>
  import singleC from '~/components/singleC'
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
        myList: 'myPosts'
      })
    }
  }
  </script>

<style scoped media="screen">
.listBloc{
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
