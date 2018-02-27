<template>
  <div class="heade-r">
    <div class="logo"><logo></logo></div>
    <div class="desktopS">
      <div class="desktopSearcher">
        <searchWindowC @closeWindow="showSearcher"></searchWindowC>
      </div>
    </div>
    <div class="navabar">
      <a href="#" @click="showMenu" class="display:block;"><i class="material-icons ico">&#xe5d2;</i></a>
    </div>
    <div class="mobile">
      <div class="mobilebloc">
        <ul class="mylist">
          <a href="/"><div class="listed"><i class="material-icons icon-l">&#xe5c3;</i>Inicio</div></a>
          <a href="/profile" v-if="this.isLogged"><div class="listed"><i class="material-icons icon-l">&#xe556;</i>Perfil</div></a>
          <a href="/login" v-if="!this.isLogged"><div class="listed"><i class="material-icons icon-l">&#xe7fe;</i>Iniciar sesión / Registrarse</div></a>
          <nuxt-link to="/favorites" v-if="this.isLogged"><div class="listed"><i class="material-icons icon-l">&#xe83a;</i>Mis favoritos</div></nuxt-link>
          <a href="#" @click="locate"><div class="listed"><i class="material-icons icon-l">&#xe0c8;</i>Tu Zona</div></a>
          <a href="#" @click="logOut" v-if="this.isLogged"><div class="listed"><i class="material-icons icon-l" style="color:red;">&#xE8AC;</i>Cerrar sesión</div></a>
        </ul>
      </div>
    </div>
    <div class="men-u">
      <div class="userch">
        <nuxt-link :to="'/' + this.logged"><i class="material-icons ico">&#xe7fd;</i></nuxt-link>
        <a href="#" @click="showSearcher"><i class="material-icons ico">&#xe8b6;</i></a>
        <div class="srchBloc"><searcherC style="display: inline;display:flex;flex-flow:row nowrap;"></searcherC></div>
      </div>
      <nuxt-link to="/favorites" v-if="this.isLogged" class="line">Favoritos</nuxt-link>
      <nuxt-link to="" v-if="this.isLogged" class="line tall opa">|</nuxt-link>
      <a href="#" @click="locate" class="line">TuZona</a>
      <nuxt-link to="" class="line tall opa">|</nuxt-link>
      <nuxt-link to="/login" v-if="!this.isLogged" class="line">Regístrate</nuxt-link>
      <nuxt-link to="" v-if="!this.isLogged" class="line tall opa">|</nuxt-link>
      <nuxt-link to="/" class="line">Inicio</nuxt-link>
      <button type="button" @click="logOut" v-if="this.isLogged" class="btn send"><i class="material-icons ico">&#xE8AC;</i></button>
    </div>
  </div>
</template>

<script type="text/javascript">
import logo from '~/components/common/logo'
import searcherC from '~/components/common/searcherC'
import searchWindowC from '~/components/common/searchWindow'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      show: false,
      showSearch: false
    }
  },
  components: {
    logo,
    searcherC,
    searchWindowC
  },
  computed: {
    ...mapGetters({ isLogged: 'getUser' }),
    logged () {
      if (this.isLogged) {
        return 'profile'
      } else {
        return 'login'
      }
    }
  },
  methods: {
    ...mapActions(['onSetLogOut', 'bindAuth']),
    logOut () {
      this.onSetLogOut()
      this.$router.push('/')
    },
    showMenu () {
      var drawer = document.getElementsByClassName('mobilebloc')[0]
      var height = drawer.scrollHeight
      if (!this.show) {
        drawer.style.setProperty('height', height + 'px')
        this.show = true
      } else {
        drawer.style.setProperty('height', '0')
        this.show = false
      }
    },
    showSearcher () {
      if (!this.showSearch) {
        this.showSearch = true
        document.getElementsByClassName('desktopS')[0].style.opacity = '1'
        document.getElementsByClassName('desktopSearcher')[0].style.visibility = 'visible'
      } else {
        this.showSearch = false
        document.getElementsByClassName('desktopS')[0].style.opacity = '0'
        document.getElementsByClassName('desktopSearcher')[0].style.visibility = 'hidden'
      }
    },
    locate () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          this.$router.push({ path: '/searchLocation/' + 'query', query: { lat: position.coords.latitude, lng: position.coords.longitude } })
        }.bind(this))
      }
    }
  }
}
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";
.mobilebloc {
  position:absolute;
  z-index:1;
  background-color:#fff;
  margin-left: -110%;;
  margin-top: 6.3em;
  width: 130%;
  height: 0;
  color: black;
  overflow: hidden;
  transition: height 0.3s ease-out;
}
.listed {
  display: flex;
  align-items: center;
  padding-left: 30%;
  padding: 15px;
  width: 100%;
  border-bottom: 1px solid #E6E6E6;
}
.listed:hover{
  background-color: #00a4ba;
  opacity: 0.8;
  color:white;
}
.listed:hover > .icon-l{
  background-color: #00a4ba;
  opacity: 0.8;
  color:white;
}
.mylist a{
  color: black;
  text-decoration: none;
  background-color:#fff;
}
.icon-l {
  margin-left: 20%;
  margin-right: 10px;
  color:#00a4ba;
}

.heade-r {
  width: 100%;
  height: 70px;
  background:#00a4ba;
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-width: 2px;
  border-color: #00a4ba;
  padding:10px;
  display: flex;
  justify-content:space-between;
  align-content:center;
  flex-direction:row;
  flex-wrap:nowrap;
}

.heade-r .logo {
  font-size:30px;
  max-width: 240px;
  margin-left: 2%;
}


.navabar {
  display: flex;
  width:30%;
  font-size: 30px;
  flex-direction: row-reverse;

}

.navabar a {
  text-align: right;
  border-radius: $whiteColor;
  color:$blueColor;
  text-decoration: none;
  padding:5px;
  margin-right: 2px;
}

.navabar i {
  font-size: 35px;
}

.men-u{
  display: none;
}
.ico {
  color: white;
}

.send {
  background-color: transparent;
  border: 1px solid white;
}

.desktopS {
  display: none;
}

@media screen and (min-width: 800px) {
  .mobile {
    display: none;
  }
  .heade-r {
    padding: 10px;
    height: auto;
  }
  .navabar{
    display:none;
  }
  .heade-r .men-u{
    max-height: 48px;
    font-size: 1.2rem;
    width:60%;
    display:flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
  .heade-r .men-u a.line{
    border-width: 2px;
    border-bottom-color: $redColor;
    font-weight: lighter;
    color:white;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .userch{
    font-size: 1.3em;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    width: 20%;
  }
  .userch a{
    color:$darkBlue;
    padding: 10px;
    text-decoration: none;
  }
  .userch a i{
    font-size: 30px;
  }
  .srchBloc {
    display: none;
  }
  .desktopS {
    display: block;
    position: absolute;
    z-index: 1;
    opacity: 0;
    width: 0px;
    transition: all 0.5s linear;
  }
  .desktopSearcher {
    position: fixed;
    visibility: hidden;
    width: 98%;
    opacity: .8;
    height: 100%;
    background-color: black;
    z-index: 1;
  }
  .tall {
    font-size:2em;
    font-weight:lighter;
  }

  .opa {
    opacity: 0.5;
  }
}
</style>
