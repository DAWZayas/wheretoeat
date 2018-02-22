<template>
  <div class="flip-container">
    <div class="front">
      <span @click="closeWin" class="close"><i class="material-icons icosearch">&#xE14C;</i></span>
      <div class="searchSection">
        <input type="text" ref="words" class="inputfield" placeholder="restaurante, ciudad, comida.."><a href="#" @click="searchRestaurants"><i class="material-icons icosearch">&#xe8b6;</i></a>
        <div class="searchoption" style="width:100%;margin-top:4%;height:50px;">
          <button type="button" @click="rotate" class="btn btn-info" style="margin-left:2%;"><div style="display:flex;align-items:center;"><span>{{filterText}}</span><i class="material-icons">&#xE145;</i></div></button>
          <button type="button" @click="locate" class="btn btn-danger" style="margin-left:5%;"><div style="display:flex;align-items:center;"><span>Mi zona</span><i class="material-icons">&#xe55f;</i></div></button>
        </div>
      </div>
    </div>
    <div class="back">
      <span @click="closeWin" class="close"><i class="material-icons icosearch">&#xE14C;</i></span>
      <div class="searchSection">
        <GmapAutocomplete @place_changed="setPlace" class="inputfield"></GmapAutocomplete>
        <div class="selector">
          <div class="cel">
            <h6>Valoración</h6>
            <select v-model="rating">
              <option value="-1">sin especif.</option>
              <option v-for="n in 10" :value="n">{{n}}</option>
            </select>
          </div>
          <div class="cel">
            <h6>Precio Medio</h6>
            <select v-model="bill">
              <option value="-1">sin especif.</option>
              <option value="0" style="color:black;">0 - 10 €</option>
              <option v-for="n in 9" :value="n">{{n}}0 - {{n+1}}0 €</option>
            </select>
          </div>
        </div>
        <div class="selector" style="padding:0;">
          <div class="searchoption" style="width:100%;margin-top:4%;height:50px;">
            <button type="button" @click="rotate" class="btn btn-info" style="margin-left:2%;"><div style="display:flex;align-items:center;"><span>{{filterText}}</span><i class="material-icons">&#xE145;</i></div></button>
            <button type="button" @click="locate" class="btn btn-danger" style="margin-left:5%;"><div style="display:flex;align-items:center;"><span>Mi zona</span><i class="material-icons">&#xe55f;</i></div></button>
            <button type="button" @click="searchRestaurants" class="btn btn-danger" style="margin-left:5%;"><div style="display:flex;align-items:center;"><span>Buscar</span><i class="material-icons">&#xe55f;</i></div></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      filterText: 'Busqueda filtrada',
      showFilterWin: false,
      latLng: {},
      lat: '',
      lng: '',
      rating: -1,
      bill: -1
    }
  },
  methods: {
    ...mapActions(['setMainPosts']),
    rotate () {
      let front = document.getElementsByClassName('front')[0]
      let back = document.getElementsByClassName('back')[0]
      if (!this.showFilterWin) {
        back.style.transform = 'rotateY(0deg)'
        front.style.transform = 'rotateY(180deg)'
        this.showFilterWin = true
        setTimeout(() => { this.filterText = 'Busqueda estandar' }, 500)
      } else {
        back.style.transform = 'rotateY(-180deg)'
        front.style.transform = 'rotateY(0deg)'
        this.showFilterWin = false
        setTimeout(() => { this.filterText = 'Busqueda filtrada' }, 500)
      }
    },
    closeWin () {
      this.$emit('closeWindow')
    },
    locate () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          this.lat = pos.lat
          this.lng = pos.lng
          this.$router.push({path: '/searchLocation/' + 'query', query: {lat: this.lat, lng: this.lng}})
        }.bind(this))
      }
    },
    searchRestaurants () {
      let searchWords = this.$refs.words.value
      if (searchWords !== '') {
        this.setMainPosts({ type: 'wordList', words: searchWords, bill: this.bill, points: this.rating })
        this.$router.push({path: '/search/' + 'query', query: { words: searchWords }})
      } else if (this.lat !== '') {
        this.$router.push({path: '/searchLocation/' + 'query', query: { lat: this.lat, lng: this.lng }})
      }
    },
    setPlace (place) {
      this.latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
      this.lat = this.latLng.lat
      this.lng = this.latLng.lng
    }
  }
}
</script>

<style scoped lang="scss">

input {
  opacity:1;
}

.btn {
  transition: none;
}

.close {
  color: white;
  float: right;
  font-size: 40px;
  margin: 25px;
  z-index:1;
}

.searchoption {
  width: 100%;
  border: 1px solid red;
}

.icosearch {
  font-size: 50px;
  color: white;
}

.searchSection {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  margin-left: 30%;
  margin-top: 25%;
  z-index: 2;
}

.inputfield {
  width: 85%;
  height: 50px;
  font-size: 30px;
  background-color: white;
  color: white;
  opacity: 1;
  padding: 20px;
  z-index: 3;
  background-color: black;
}

select {
  width: 80%;
  height: 40px;
  padding: 5px;
  color: white;
  background-color: transparent;
  opacity:1;
}

.selector {
  color:white;
  padding: 20px;
  width: 85%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.cel {
  width: 50%;
}

.flip-container {
  perspective: 100%;
  transform-style: preserve-3d;
}

.flip-container, .front, .back {
  width: 100%;
  height: 220px;
}


.front, .back {
  backface-visibility: hidden;
  transition: 1.5s;
  transform-style: preserve-3d;
  position: absolute;
}

.front {
  z-index: 2;
  transform: rotateY(0deg);
}
.back {
  z-index: 2;
  transform: rotateY(-180deg);
}
</style>
