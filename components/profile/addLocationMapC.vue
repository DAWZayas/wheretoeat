<template :coordinate="this.coordinate">
  <div>
    <label style="width:100%">
      <GmapAutocomplete style="width:70%" @place_changed="setPlace"></GmapAutocomplete>
      <button class="btn btn-info bot" @click="usePlace">Aceptar</button>
    </label>
    <br/>
    <GmapMap style="width: 100%; height: 300px;" :zoom="1" :center="{lat: 0, lng: 0}">
      <GmapMarker v-for="(marker, index) in markers" :key="index" :position="marker.position" />
      <GmapMarker v-if="this.place" :position="{ lat: this.place.geometry.location.lat(), lng: this.place.geometry.location.lng() }" />
    </GmapMap>
  </div>
  </template>
  <script>
  export default {
    data () {
      return {
        markers: [],
        place: null,
        lat: '',
        lng: ''
      }
    },
    description: 'Autocomplete Example (#164)',
    methods: {
      setDescription (description) {
        this.description = description
      },
      setPlace (place) {
        this.place = place
      },
      usePlace (place) {
        this.markers = []
        if (this.place) {
          this.markers.push({
            position: {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng()
            }
          })
          this.lat = this.place.geometry.location.lat()
          this.lng = this.place.geometry.location.lng()
          const nn = {
            lat: this.lat,
            lng: this.lng
          }
          this.$emit('coordinates', nn)
          this.place = null
          this.markers = []
        }
      }
    }
  }
  </script>
  <style scoped lang='scss'>
  @import "assets/sass/colors.scss";
  .bot {
    margin-left: 10px;
  }
  </style>
