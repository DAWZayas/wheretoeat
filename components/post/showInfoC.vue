<template>
  <div class="modal fade" :id="idnum" tabindex="-1" role="dialog" aria-labelledby="exampleShowInfo" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleShowInfo">Información general</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h3>{{ info.title }}</h3>Municipio/Ciudad:<h5> {{ info.location }}</h5>Calle: <h5>Antonio Machado 45</h5><hr>
          <h5>Teléfono : {{ info.tlf }} <i class="material-icons">&#xe0cd;</i></h5>
          <button type="button" class="btn btn-danger">Sitio web</button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ['info'],
  data () {
    return {
      idnum: this.info.id
    }
  }
}
</script>
<style scoped media="screen">
@import "assets/sass/colors.scss";

h3 {
  color: #a85122;
}
</style>
