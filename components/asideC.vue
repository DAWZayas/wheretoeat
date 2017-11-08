<template>
  <aside>
    <singleC v-for="info in infoA" :key="info.title" :info="info" class="widget"></singleC>
  </aside>
</template>

<script type="text/javascript">
  import singleC from '~/components/singleC'
  export default {
    data () {
      return {
        infoA: [
          {
            img: require('~/assets/images/img10.jpg'),
            title: 'Travesia',
            points: '5.2',
            comTitle: '',
            comment: '',
            showButton: false
          },
          {
            img: require('~/assets/images/img2.jpg'),
            title: 'La Fuente',
            points: '8.5',
            comTitle: '',
            comment: '',
            showButton: false
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
