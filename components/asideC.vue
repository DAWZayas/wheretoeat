<template>
  <aside>
    <singleC v-for="info in infoA" :key="info.title" :info="info" class="widget"></singleC>
  </aside>
</template>

<script type="text/javascript">
  import singleC from '~/components/post/singleC'
  export default {
    data () {
      return {
        infoA: [
          {
            id: 2,
            src: 'img3',
            location: '(Las Rozas)',
            title: 'Travesia',
            points: '5.2',
            bill: 2,
            comTitle: '',
            comment: '',
            showButton: false,
            tlf: '736 455 123'
          },
          {
            id: 3,
            src: 'img2',
            location: '(Villalba)',
            title: 'La Fuente',
            points: '8.5',
            bill: 6,
            comTitle: '',
            comment: '',
            showButton: false,
            tlf: '112 432 847'
          }
        ]
      }
    },
    components: {
      singleC
    }
  }
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";
aside {
  display: flex;
  flex-direction:column;
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
		border-top-style: solid;
		border-top-left-radius: 20px;
		border-color: $darkBlue;
		border-width: 2px;
  }
  aside .widget {
    border-right-style: solid;
    border-color: black;
    border-width: 1px;
  }
}

</style>
