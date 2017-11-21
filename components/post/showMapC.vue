<template>
  <div class="modal fade" id="mapLocation" tabindex="-1" role="dialog" aria-labelledby="showLoc" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="showLoc">Mapa del sitio</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img src="~/assets/images/mapExample.jpg" alt="">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Sitio web</button>
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
    }
  }
}
</script>
