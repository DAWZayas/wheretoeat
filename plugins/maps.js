import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBuouzmU4Kk1UuZGTY7Wt6_CKL9dNqxaOA',
    v: 3,
    libraries: 'places'
  }
})
