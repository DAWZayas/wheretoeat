<template>
  <div class="header">
    <div class="logo">
      <logo></logo>
    </div>
    <nav>
      <nuxt-link to="#"><i class="material-icons">&#xe5d2;</i></nuxt-link>
      <nuxt-link to="#"><i class="material-icons">&#xe8b6;</i></nuxt-link>
    </nav>

    <div class="menu">
      <div class="userch">
        <nuxt-link to="#"><i class="material-icons">&#xe7fd;</i></nuxt-link>
        <nuxt-link to="#"><i class="material-icons">&#xe8b6;</i></nuxt-link>
      </div>
      <nuxt-link to="#" class="line">TuZona</nuxt-link>
      <nuxt-link to="#" class="line">Registrate</nuxt-link>
      <nuxt-link to="/" class="line">Inicio</nuxt-link>
    </div>

  </div>
</template>

<script type="text/javascript">

import logo from '~/components/common/logo'
export default {
  name: 'headerC',
  components: {
    logo
  }
}
</script>
<style media="screen">
.header {
  background:#fff;
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-width: 2px;
  border-color: #a85122;
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
  color:#fff;
  font-size:30px;
  max-width: 240px;
  margin-left: 2%;
}


.header nav {
  width:30%;
  font-size: 30px;
  padding-top: 5px;
  display:flex;
  flex-wrap:wrap;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items:center;
}

.header nav a {

  border-radius: #fff;
  color:#38393a;
  text-align: center;
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

@media screen and (min-width: 850px) {

  .header {
    padding: 20px;
  }

  .header nav{
    display:none;
  }

  .header .menu{
    max-height: 50px;
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
    border-bottom-color: #a85122;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 3px;
    color:#38393a;
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
    color:#38393a;
    padding: 10px;
    text-decoration: none;
  }
  .userch a i{
    font-size: 30px;
  }
}
</style>
