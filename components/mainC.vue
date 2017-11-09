<template>
  <div class="main">
    <singleC :info="infoM"></singleC>
  </div>
</template>
<script type="text/javascript">
import singleC from '~/components/singleC'
export default {
  data () {
    return {
      infoM:
      {
        id: 1,
        img: require('~/assets/images/img1.jpg'),
        location: '(Majadahonda)',
        title: 'Soul Food',
        points: '7.2',
        comTitle: 'Le Grand Dictionnaire',
        comment: 'En el Renacimiento se revitalizó la cultura clásica, llegando la gastronomía a altas cotas de refinamiento y sofisticación. Destacó la cocina veneciana, que gracias a su comercio con el Oriente favoreció la importación de todo tipo de especias: pimienta, mostaza, azafrán, nuez moscada, clavo, canela, etc.',
        showButton: true,
        tlf: '234 543 234'
      }
    }
  },
  components: {
    singleC
  }
}
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";

.main {
  background:$whiteColor;
  flex:1 1 70%;
}

@media screen and (min-width: 650px) {
  .mainBloc{
    min-width: 100%;
  }
}

@media screen and (min-width: 800px) {
  .main{
    padding: 20px;
    border-left:2px solid $redColor;
  }
}
</style>
