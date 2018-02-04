<template>
  <div class="commentBloc">
      <nuxt-link :to="'/' + this.userDir" class="userdir"><span class="user">{{ usrName }}</span></nuxt-link> {{ comment.comment }}
      <hr>
  </div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
import firebaseApp from '~/firebaseapp'
export default {
  props: ['comment'],
  data () {
    return {
      usrName: ''
    }
  },
  computed: {
    ...mapGetters({
      userId: 'getUser'
    }),
    userDir () {
      if (this.userId === this.comment.user_id) {
        return 'profile'
      } else {
        return 'users/' + this.comment.user_id
      }
    }
  },
  mounted () {
    let db = firebaseApp.database()
    db.ref('/users/' + this.comment.user_id).once('value').then(snapshot => {
      if (snapshot.val()) { this.usrName = snapshot.val().username }
    })
  }
}
</script>
<style scoped media="screen">
@import "assets/sass/colors.scss";
  .user {
    font-size: 16px;
    color: $redColor;
    font-weight: bold;
  }
  .userdir {
    color: black;
    text-decoration: none;
  }
</style>
