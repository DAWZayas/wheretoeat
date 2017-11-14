const infoProfile = {
  id: 3456,
  img: require('~/assets/images/profile.jpg'),
  name: 'Pedro Gomez',
  username: 'pedrogm',
  age: '35',
  city: 'Madrid',
  info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  followers: 46
}

var myList = [
  {
    id: 4,
    img: require('~/assets/images/myimg1.jpg'),
    location: '(Malasaña)',
    title: 'La fuente',
    points: '6.2',
    bill: 0,
    comTitle: 'Le Grand Dictionnaire',
    comment: 'En el Renacimiento se revitalizó la cultura clásica, llegando la gastronomía a altas cotas de refinamiento y sofisticación. Destacó la cocina veneciana, que gracias a su comercio con el Oriente favoreció la importación de todo tipo de especias: pimienta, mostaza, azafrán, nuez moscada, clavo, canela, etc.',
    showButton: true,
    tlf: '765 777 555'
  },
  {
    id: 5,
    img: require('~/assets/images/myimg2.jpg'),
    location: '(Aravaca)',
    title: 'El Piso',
    points: '1',
    bill: 3,
    comTitle: 'Agradable y con estilo',
    comment: 'En la Antigua Roma la cocina evolucionó de la frugalidad de la época republicana, basada en vegetales, legumbres y cereales, a la riqueza de la época imperial, donde se importaban numerosos alimentos de países extranjeros, con gran influencia de la cocina griega',
    showButton: true,
    tlf: '222 333 444'
  },
  {
    id: 6,
    img: require('~/assets/images/myimg3.jpg'),
    location: '(Fuencarral)',
    title: 'La Abadia',
    points: '2.2',
    bill: 1,
    comTitle: 'La mejor carne asada',
    comment: 'Herederas de la cocina griega y romana fueron la bizantina y la árabe: de la primera destacó su repostería, así como la elaboración de quesos y el gusto por los rellenos y la carne picada.',
    showButton: true,
    tlf: '123 888 999'
  },
  {
    id: 7,
    img: require('~/assets/images/myimg4.jpg'),
    location: '(Moncloa)',
    title: 'La Colmena',
    points: '5',
    bill: 5,
    comTitle: 'el Renacimiento',
    comment: 'Le Grand Dictionnaire de Cuisine de Alexandre Dumas (1873); también apareció entonces la crítica gastronómica, con publicaciones como la Guía Michelin.',
    showButton: true,
    tlf: '253 444 543'
  }
]

export default {
  infoProfile,
  myList
}
