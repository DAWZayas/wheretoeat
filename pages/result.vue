<template lang="html">
  <div class="">
    <button @click="postToDisplay" type="button" name="button">Prueba</button>
    <div v-for="found in founds">{{ allPosts[found].comTitle }}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      founds: [],
      loaded: false
    }
  },
  computed: {
    ...mapGetters({
      posts: 'getSearchValue',
      allPosts: 'getAllPosts'
    })
  },
  methods: {
    postToDisplay () {
      console.log('>>>', this.posts)
      this.posts.filter(post => {
        console.log('>', this.posts)
        // if (post.comTitle) {
        let title = post.title.toLowerCase()
        // let comTitle = post.comTitle.toLowerCase()
        // let user = post.user.toLowerCase()
        let term = this.$route.query.title.toLowerCase()
        if (title.indexOf(term) >= 0) {
          console.log('Encontrado', post.id)
          this.founds.push(post.id)
        } else {
          console.log('No encontrado')
        }
        // }
      })
    }
  },
  watch: {
    posts: () => { this.loaded = true },
    loaded: () => { this.postToDisplay() }
  }
}
</script>
<style lang="css">
</style>
