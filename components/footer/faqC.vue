<template lang="html">
  <div class="containe-r">
    <h1>FAQ</h1>
    <p><span>WhereToEat</span> es un servicio gratuito de geolocalización y opinión de locales dedicados al servicio de la hosteleria (Restaurantes, Salas de Fiesta, Discotecas, Bares...) que permite a sus usuarios finales realizar valoraciones/opiniones de estos</p>
    <p>"Las opiniones vertidas por los usuarios no representan la opinión de <span>WhereToEat</span>"</p>
    <h4>Tu Privacidad Importa</h4>
    <p>Para nosotros sus datos siempre seran suyos, no proporcionaremos información personal a otras compañias, unicamente tiene que preocuparse de disfrutar de esta experiencia juntos.</p>
    <h4>Mas Información</h4>
    <p>Contacta con nosotros para recibir mas información, ayudarnos a mejorar o darnos tu opinión, estaremos encantados de tener noticias suyas.</p>
    <p class="contacta"><nuxt-link to="contact"><i class="material-icons icon-l">&#xe0be;</i></li></nuxt-link></p>
  </div>
</template>

<style scoped lang="scss">
  @import "assets/sass/colors.scss";
  .containe-r{
    padding: 10%;
    padding-top: 5%;
    display: inline-block;
  }
  h1{
    color: $redColor;
    text-align: center;
  }
  h4{
    text-decoration: underline;
    margin-bottom: 2%;
  }
  span{
    color: $redColor;
  }
  .contacta{
    text-align: center;
  }
  i{
    font-size: 4em;
  }
</style>
