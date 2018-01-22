<template>
  <div class="commentBloc">
      <span class="user">{{ usrName }}</span> {{ comment.comment }}
      <hr>
  </div>
</template>
<script type="text/javascript">
import firebaseApp from '~/firebaseapp'
export default {
  props: ['comment'],
  data () {
    return {
      usrName: ''
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
</style>
