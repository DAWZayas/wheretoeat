<template>
  <div class="commentBloc">
      <span class="user">{{ comment.user }}</span> {{ comment.comment }}
      <hr>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ['comment'],
  data () {
    return {
    }
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
