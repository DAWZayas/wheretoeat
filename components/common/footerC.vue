<template>
  <div class="footer">
    <div class="links">
      <nuxt-link to="/">Inicio</nuxt-link>
      <nuxt-link to="#">Politica de privacidad</nuxt-link>
      <nuxt-link to="#">Contacto</nuxt-link>
    </div>
    <div class="social">
      <nuxt-link to="#"><i class="material-icons">&#xe54b;</i></nuxt-link>
      <nuxt-link to="#"><i class="material-icons">&#xe541;</i></nuxt-link>
      <nuxt-link to="#"><i class="material-icons">&#xe80d;</i></nuxt-link>
    </div>
 </div>
 </template>


<style media="screen">
.footer {
background:#2c3e50;
width: 100%;
padding:20px;
display: flex;
flex-wrap:wrap;
align-items: center;
justify-content:space-around;
}

.footer .links {
font-size: 1rem;
display:flex;
flex-wrap:wrap;
}

.footer .links a {
flex-grow:1;

color:#fff;
padding:10px;
text-align: center;
text-decoration:none;
}

.footer .social a {
font-size: 2rem;
color:#fff;
text-decoration: none;
padding:10px;
display: inline-block;
}

@media screen and (min-width: 850px) {
  .footer {
		justify-content:space-between;
    align-items: center;
	}
}
</style>
