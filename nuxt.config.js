module.exports = {
  css: ['~/assets/styles/main.scss'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'WhereToEat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WhereToEat is a site where you can discover new restaurants, with the help of other users who comment their experience and rate the restaurants.' },
      { hid: 'keywords', name: 'keywords', content: 'where, to, eat, restaurant, location, client, rating, rate, food, drink, dinner, lunch ' },
      { hid: 'image', property: 'og:image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/profitoro-ad0f0.appspot.com/o/assets%2Fsharing.png?alt=media&token=d8687d98-24a7-4a8a-b0c4-06a39b127443' },
      { hid: 'url', property: 'og:url', name: 'og:url', content: 'https://www.wheretoeat.com' },
      { hid: 'title', property: 'og:title', name: 'og:title', content: 'WhereToEat' },
      { hid: 'ogdescription', property: 'og:description', name: 'og:description', content: 'WhereToEat is a site where you can discover new restaurant, with the help of other users who coment their experience and rate the restaurants.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: '/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ],
    script: [
      { type: 'text/javascript', src: '/jquery.js' },
      { type: 'text/javascript', src: '/tether.js' },
      { type: 'text/javascript', src: '/bootstrap.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
