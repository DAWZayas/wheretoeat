<template>
  <div class="stars">
    <i v-for="n in stars" class="material-icons" v-html="showStar(n,info.points)"></i>
    <nuxt-link to="#" class="str">{{ info.points.toFixed(1) }}</nuxt-link>
  </div>
</template>
<script type="text/javascript">

export default {
  props: ['info'],
  data () {
    return {
      fullStar: '&#xe838;',
      halfStar: '&#xe839;',
      emptyStar: '&#xe83a;',
      stars: 5
    }
  },
  methods: {
    showStar (n, points) {
      var multiply = this.stars / 5
      var nStars = (this.stars * points * multiply) / (this.stars * 2)
      if (n <= nStars) {
        return this.fullStar
      } else {
        var round = Math.round(nStars)
        var halfRound = round - 0.5
        if (round > nStars && nStars >= halfRound && n === round) {
          return this.halfStar
        } else {
          return this.emptyStar
        }
      }
    }
  }
}
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";
.str {
  font-size: .8em;
}
.stars{
  display: flex;
  flex-flow: row wrap;
  font-size: .7em;
  color: $blueColor;
  text-decoration: none;
}
.stars a{
  color: $blueColor;
  text-decoration: none;
}
</style>
