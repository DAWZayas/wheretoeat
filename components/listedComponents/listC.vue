<template>
  <div class="listBloc">
      <singleC v-for="info in information" :key="info.title" :info="info"></singleC>
  </div>
</template>
<script>
  import singleC from '~/components/listedComponents/singleC'
  export default {
    data () {
      return {
        information: [
          {
            img: require('~/assets/images/img4.jpg'),
            title: 'El Pecado',
            points: '6.2',
            comTitle: 'Le Grand Dictionnaire',
            comment: 'En el Renacimiento se revitalizó la cultura clásica, llegando la gastronomía a altas cotas de refinamiento y sofisticación. Destacó la cocina veneciana, que gracias a su comercio con el Oriente favoreció la importación de todo tipo de especias: pimienta, mostaza, azafrán, nuez moscada, clavo, canela, etc.'
          },
          {
            img: require('~/assets/images/img5.jpg'),
            title: 'La Tapa Madrileña',
            points: '8.5',
            comTitle: 'Agradable y con estilo',
            comment: 'En la Antigua Roma la cocina evolucionó de la frugalidad de la época republicana, basada en vegetales, legumbres y cereales, a la riqueza de la época imperial, donde se importaban numerosos alimentos de países extranjeros, con gran influencia de la cocina griega'
          },
          {
            img: require('~/assets/images/img6.jpg'),
            title: 'La Bohemia',
            points: '4.3',
            comTitle: 'La mejor carne asada',
            comment: 'Herederas de la cocina griega y romana fueron la bizantina y la árabe: de la primera destacó su repostería, así como la elaboración de quesos y el gusto por los rellenos y la carne picada.'
          },
          {
            img: require('~/assets/images/img7.jpg'),
            title: 'Casa pepe',
            points: '6',
            comTitle: 'el Renacimiento',
            comment: 'Le Grand Dictionnaire de Cuisine de Alexandre Dumas (1873); también apareció entonces la crítica gastronómica, con publicaciones como la Guía Michelin.'
          },
          {
            img: require('~/assets/images/img8.jpg'),
            title: 'La pulperia',
            points: '5.2',
            comTitle: 'La Revolución Francesa',
            comment: 'La Revolución Francesa marcó un punto de inflexión en la gastronomía europea, que se extendió a nivel popular, siendo un acervo común de todos los estamentos sociales, y no solo los privilegiados.'
          },
          {
            img: require('~/assets/images/img9.jpg'),
            title: 'Starbucks',
            points: '7.5',
            comTitle: 'En sentido inverso',
            comment: 'En sentido inverso, ha surgido una nueva preocupación por los alimentos sanos y equilibrados, que han favorecido el surgimiento de nuevos productos que destacan sus cualidades nutricionales.'
          },
          {
            img: require('~/assets/images/img3.jpg'),
            title: 'McDonals',
            points: '3.4',
            comTitle: 'Cocina regional',
            comment: 'También hay que destacar la revalorización de la cocina regional, favorecida por el avance de los medios de transporte y el auge del turismo, que conllevó el retorno a una cocina natural y sencilla, hecho que marcó el punto de arranque de la nouvelle cuisine, que aúna la tradición y la sencillez con los nuevos adelantos y un cierto afán de innovación y experimentación.'
          }
        ]
      }
    },
    components: {
      singleC
    }
  }
</script>
<style>

<style media="screen">
.listBloc{
  display: flex;
  flex-direction: column;
  align-content: center;
}
@media screen and (min-width: 800px) {
  .listBloc {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .listBloc > .mainBloc {
    border-style: none;
  }
}
</style>
