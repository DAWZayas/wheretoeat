<template>
  <div class="header">
    <div class="logo">
      <logo></logo>
    </div>
    <nav>
      <nuxt-link to="#menu" data-toggle="collapse" data-target="#menu" aria-expanded="false" aria-controls="menu"><i class="material-icons">&#xe5d2;</i></nuxt-link>
    </nav>
    <div id="menu" class="collapse mob-menu">
      <ul class="list-group">
        <nuxt-link to="/"><li class="list-group-item ul-menu"><i class="material-icons icon-l">&#xe5c3;</i>Inicio</li></nuxt-link>
        <nuxt-link to="profile"><li class="list-group-item ul-menu"><i class="material-icons icon-l">&#xe556;</i>Perfil</li></nuxt-link>
        <nuxt-link to="login"><li class="list-group-item ul-menu"><i class="material-icons icon-l">&#xe7fe;</i>Inicia sesión / Regístrate</li></nuxt-link>
        <nuxt-link to="#"><li class="list-group-item ul-menu"><i class="material-icons icon-l">&#xe83a;</i>Lo + visto</li></nuxt-link>
        <nuxt-link to="#"><li class="list-group-item ul-menu"><i class="material-icons icon-l">&#xe0c8;</i>Tu Zona</li></nuxt-link>
        <nuxt-link to="contact"><li class="list-group-item ul-menu"><i class="material-icons icon-l">&#xe0be;</i>Contacto</li></nuxt-link>
      </ul>
    </div>

    <div class="menu">
      <div class="userch">
        <nuxt-link to="profile"><i class="material-icons">&#xe7fd;</i></nuxt-link>
        <div class="btn-group" role="group">
          <div class="btn-group">
            <nuxt-link to="#" id="showSearcher" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">&#xe8b6;</i></nuxt-link>
            <div class="dropdown-menu srchBloc" aria-labelledby="showSearcher">
              <div class="srch"><searcherC style="display: inline;display:flex;flex-flow:row nowrap;"></searcherC></div>
            </div>
          </div>
        </div>
      </div>
      <nuxt-link to="#" class="line">TuZona</nuxt-link>
      <nuxt-link to="login" class="line">Regístrate</nuxt-link>
      <nuxt-link to="/" class="line">Inicio</nuxt-link>
    </div>
  </div>
</template>

<script type="text/javascript">
import logo from '~/components/common/logo'
import searcherC from '~/components/common/searcherC'
export default {
  name: 'headerC',
  components: {
    logo,
    searcherC
  }
}
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";
.header {
  width: 100%;
  height: 70px;
  background:$whiteColor;
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-width: 2px;
  border-color: $redColor;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding:10px;
  display: flex;
  justify-content:space-between;
  align-content:center;
  flex-direction:row;
  flex-wrap:nowrap;
}

.header .logo {
  color:$whiteColor;
  font-size:30px;
  max-width: 240px;
  margin-left: 2%;
}


.header nav {
  display: flex;
  width:30%;
  font-size: 30px;
  flex-direction: row-reverse;

}

.header nav a {
  text-align: right;
  border-radius: $whiteColor;
  color:$blueColor;
  text-decoration: none;
  padding:5px;
  margin-right: 2px;
}

.header nav i {
  font-size: 35px;
}

.header .menu{
  display: none;
}

.mob-menu {
	position:absolute;
	z-index:1;
	background-color:#fff;
  margin-left: -3em;
	margin-top: 6.3em;
	width: 130%;
	color: black;
}

.ul-menu {
	display:flex;
	align-items:center;
	background-color: #fff;
	padding: none;
	padding-left: 7em;
}

li .icon-l {
	float:right;
	margin-right: .8em;
	color:$blueColor;
}

.list-group a{
	color: black;
	text-decoration: none;
	background-color:#fff;
}

.ul-menu {
	background-color:#fff;
	border-left: none;
	border-right: none;
	border-top: none;
}

.ul-menu a:hover{
	color: grey;

}

@media screen and (min-width: 800px) {

  .header .mob-menu {
    display: none;
  }

  .header {
    padding: 20px;
    height: auto;
  }

  .header nav{
    display:none;
  }
  .header .menu{
    max-height: 48px;
    font-size: 1.2rem;
    width:60%;
    display:flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }

  .header .menu a.line{
    border-bottom-style: solid;
    border-top-style: solid;
    border-width: 2px;
    border-bottom-color: $redColor;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 3px;
    color:$darkBlue;
    padding: 7px;
    text-decoration: none;
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

  .srch {
    width: 100%;
    height: 40px;
    width: 600px;
  }

  .srchBloc {
    margin-left: -30em;
    margin-top: .7em;
  }

}
</style>
