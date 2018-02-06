<template lang="html">
  <div class="containe-r">
    <headerC></headerC>
    <searcherC></searcherC>
    <div class="listBloc" v-if="searchPosts.length>0">
      <singleC v-for="info in searchPosts" :key="info.post_id" :info="info"></singleC>
    </div>
    <h2 class="result" v-if="searchPosts.length===0">No hay resultados que mostrar...</h2>
    <footerC></footerC>
    <div v-if="isLoading" class="load"><img src="~/assets/oval.svg" width="80" alt=""></div>
  </div>
</template>
<script>
import { headerC, footerC, searcherC } from '~/components/common'
import singleC from '~/components/post/singleC'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      isLoading: true
    }
  },
  components: {
    headerC,
    footerC,
    searcherC,
    singleC
  },
  computed: {
    ...mapGetters({
      searchPosts: 'getSearchPost'
    }),
    ...mapActions([
      'bindAuth', 'unbindFirebaseReferences'
    ])
  },
  mounted () {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    setTimeout(() => {
      this.isLoading = false
      document.getElementsByTagName('body')[0].style.overflow = 'visible'
    }, 500)
  },
  created () {
    this.bindAuth
  },
  destroyed () {
    this.unbindFirebaseReferences
  }
}
</script>
<style scoped media="screen">
.load {
  padding-top: 20%;
  padding-left: 47%;
  z-index: 1;
  position: absolute;
  width: 100%;
  height:100%;
  background-color: rgba(255,255,255,0.8);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.containe-r{
  width: 100%;
  display:flex;
  flex-flow:row wrap;
}
.listBloc{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.result{
  width: 100%;
  text-align: center;
}
@media screen and (min-width: 650px) {
  .containe-r{
    width: 100%;
    display:flex;
	  flex-flow:row wrap;
  }
  .listBloc {
    display: flex;
    flex-flow: row wrap;
  }
  .listBloc > .mainBloc {
    border-style: none;
  }
}
</style>
