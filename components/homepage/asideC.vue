<template>
  <aside>
    <filterSearchC class="back"></filterSearchC>
  </aside>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import singleC from '~/components/post/singleC'
  import filterSearchC from '~/components/homepage/filterSearchC'
  export default {
    data () {
      return {
      }
    },
    components: {
      singleC,
      filterSearchC
    },
    computed: {
      ...mapGetters({
        logged: 'getUser'
      })
    }
  }
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";
aside {
  height: auto;
  overflow: hidden;
	background:$whiteColor;
  width:100%;
}
aside .widget {
  width:100%;
  margin-bottom: 5%;
	flex-flow: row wrap;
}
.mainBloc{
  width: 100%;
}
@media screen and (min-width: 600px) {
  aside {
    display: flex;
    flex-flow: row nowrap;
  }
  aside .widget { width:50%;}
}
@media screen and (min-width: 950px) {
  aside {
    display: flex;
  	flex-direction:column;
    width:30%;
}
aside .widget { width:100%;}
}

@media screen and (min-width: 1100px) {
  aside {
    padding:10px;
  }
  aside .widget {
    border-right-style: solid;
    border-color: black;
    border-width: 1px;
  }
}

</style>
