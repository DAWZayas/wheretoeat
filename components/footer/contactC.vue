<template>
  <div class="contain-er">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="well well-sm">
          <form class="form-horizontal" method="post">
            <fieldset>
              <legend class="text-center title">Contáctanos</legend>

              <div class="form-group text-center">
                <p>En esta sección usted puede ponerse en contacto con nosotros, los creadores de WhereToEat.</p>
                <p>Si tiene cualquier duda sobre el funcionamiento de nuestra página o sobre su usuario
                  puede ponerse en contacto desde aquí y le contestaremos lo antes posible.</p>
                <p>Recuerde que nosotros sólo ponemos a su disposición el conocimiento de los locales, pero no
                  gestionamos los mismos.</p>
                <p>Gracias.</p>
              </div>

              <div class="form-group">
                <span class="col-1 text-center"><i class="material-icons">person</i></span>
                <div class="col-12">
                  <input id="fname" name="name" type="text" placeholder="Nombre y apellido" class="form-control">
                </div>
              </div>

              <div class="form-group">
                <span class="col-1 text-center"><i class="material-icons">email</i></span>
                <div class="col-12">
                  <input id="email" name="email" type="text" placeholder="Email" class="form-control">
                </div>
              </div>

              <div class="form-group">
                <span class="col-1 text-center"><i class="material-icons">comment</i></span>
                <div class="col-12">
                    <textarea class="form-control" id="message" name="message" placeholder="Escriba aquí su mensaje. Le responderemos lo antes posible." rows="7"></textarea>
                </div>
              </div>

              <div class="form-group">
                <div class="col-12 text-center">
                  <button type="submit" class="btn btn-primary btn-lg">Enviar</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
</div>
</div>
</template>

<style scoped lang='scss'>
@import "assets/sass/colors.scss";
.title {
    color: $redTitle;
}

@media screen and (min-width: 800px) {
  .contain-er {
    border-left: 2px solid $redColor;
  }
}
</style>
