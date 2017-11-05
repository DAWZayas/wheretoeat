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


 <style lang='scss'>
 @import "assets/sass/colors.scss";
.footer {
@extend .flexWrap;
background:$blueColor;
width: 100%;
padding:20px;
align-items: center;
justify-content:space-around;
}

.footer .links {
@extend .flexWrap;
font-size: 1rem;
}

.footer .links a {
flex-grow:1;
color:$whiteColor;
padding:10px;
text-align: center;
text-decoration:none;
}

.footer .social a {
font-size: 2rem;
color:$whiteColor;
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
