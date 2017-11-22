<template>
  <div class="listBloc">
      <singleC v-for="info in information" :key="info.title" :info="info"></singleC>
  </div>
</template>
<script>
  import singleC from '~/components/post/singleC'
  export default {
    data () {
      return {
        information: [
          {
            id: 4,
            src: 'img4',
            location: '(El Escorial)',
            title: 'El Pecado',
            points: '6.2',
            bill: 1,
            comTitle: 'Le Grand Dictionnaire',
            comment: 'En el Renacimiento se revitalizó la cultura clásica, llegando la gastronomía a altas cotas de refinamiento y sofisticación. Destacó la cocina veneciana, que gracias a su comercio con el Oriente favoreció la importación de todo tipo de especias: pimienta, mostaza, azafrán, nuez moscada, clavo, canela, etc.',
            showButton: true,
            tlf: '765 777 555'
          },
          {
            id: 5,
            src: 'img5',
            location: '(Leganés)',
            title: 'La Tapa Madrileña',
            points: '1',
            bill: 4,
            comTitle: 'Agradable y con estilo',
            comment: 'En la Antigua Roma la cocina evolucionó de la frugalidad de la época republicana, basada en vegetales, legumbres y cereales, a la riqueza de la época imperial, donde se importaban numerosos alimentos de países extranjeros, con gran influencia de la cocina griega',
            showButton: true,
            tlf: '222 333 444'
          },
          {
            id: 6,
            src: 'img10',
            location: '(Barcelona)',
            title: 'La Bohemia',
            points: '2.2',
            bill: 3,
            comTitle: 'La mejor carne asada',
            comment: 'Herederas de la cocina griega y romana fueron la bizantina y la árabe: de la primera destacó su repostería, así como la elaboración de quesos y el gusto por los rellenos y la carne picada.',
            showButton: true,
            tlf: '123 888 999'
          },
          {
            id: 7,
            src: 'img7',
            location: '(Fuenlabrada)',
            title: 'Casa pepe',
            points: '5',
            bill: 2,
            comTitle: 'el Renacimiento',
            comment: 'Le Grand Dictionnaire de Cuisine de Alexandre Dumas (1873); también apareció entonces la crítica gastronómica, con publicaciones como la Guía Michelin.',
            showButton: true,
            tlf: '253 444 543'
          },
          {
            id: 8,
            src: 'img8',
            location: '(Aravaca)',
            title: 'La pulperia',
            points: '5.2',
            bill: 0,
            comTitle: 'La Revolución Francesa',
            comment: 'La Revolución Francesa marcó un punto de inflexión en la gastronomía europea, que se extendió a nivel popular, siendo un acervo común de todos los estamentos sociales, y no solo los privilegiados.',
            showButton: true,
            tlf: '987 654 321'
          },
          {
            id: 9,
            src: 'img9',
            location: '(Pozuelo de Alarcon)',
            title: 'Starbucks',
            points: '7.5',
            bill: 7,
            comTitle: 'En sentido inverso',
            comment: 'En sentido inverso, ha surgido una nueva preocupación por los alimentos sanos y equilibrados, que han favorecido el surgimiento de nuevos productos que destacan sus cualidades nutricionales.',
            showButton: true,
            tlf: '122 987 567'
          },
          {
            id: 10,
            src: 'img6',
            location: '(Moncloa)',
            title: 'McDonals',
            points: '3.4',
            bill: 5,
            comTitle: 'Cocina regional',
            comment: 'También hay que destacar la revalorización de la cocina regional, favorecida por el avance de los medios de transporte y el auge del turismo, que conllevó el retorno a una cocina natural y sencilla, hecho que marcó el punto de arranque de la nouvelle cuisine, que aúna la tradición y la sencillez con los nuevos adelantos y un cierto afán de innovación y experimentación.',
            showButton: true,
            tlf: '765 123 987'
          }
        ]
      }
    },
    components: {
      singleC
    }
  }
</script>

<style scoped media="screen">
.listBloc{
  display: flex;
  flex-direction: column;
  align-content: center;
}
@media screen and (min-width: 650px) {
  .listBloc {
    display: flex;
    flex-flow: row wrap;
  }
  .listBloc > .mainBloc {
    border-style: none;
  }
}
</style>
