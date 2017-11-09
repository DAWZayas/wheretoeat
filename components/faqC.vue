<template lang="html">
  <div class="container">
    <div class="row">
        <div class="col-md-12">
          <div class="jumbotron">
            <h1>FAQ</h1>
            <h4>Nuestros Servicios</h4>
            <p><span>WhereToEat</span> es un servicio gratuito de geolocalización y opinión de locales dedicados al servicio de la hosteleria (Restaurantes, Salas de Fiesta, Discotecas, Bares...) que permite a sus usuarios finales realizar valoraciones/opiniones de estos</p>
            <p>"Las opiniones vertidas por los usuarios no representan la opinión de <span>WhereToEat</span>"</p>
            <h4>Tu Privacidad Importa</h4>
            <p>Para nosotros sus datos siempre seran suyos, no proporcionaremos información personal a otras compañias, unicamente tiene que preocuparse de disfrutar de esta experiencia juntos.</p>
            <h4>Mas Información</h4>
            <p>Contacta con nosotros para recibir mas información, ayudarnos a mejorar o darnos tu opinión, estaremos encantados de tener noticias suyas.</p>
            <p class="contacta"><nuxt-link to="contact"><i class="material-icons icon-l">&#xe0be;</i></li></nuxt-link></p>
          </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
  @import "assets/sass/colors.scss";
  h1{
    color: $redColor;
    text-align: center;
  }
  h4{
    text-align: center;
    text-decoration: underline;
  }
  span{
    color: $redColor;
  }
  .contacta{
    text-align: center;
  }
</style>
