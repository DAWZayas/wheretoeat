<template>
  <div>
    <div class="modal-header">
      <h5 class="modal-title">Localización</h5>
      <span @click="closeMod" class="close">&times;</span>
    </div>
    <div class="modal-body">
      <GmapMap style="width: 100%; height: 300px;" :zoom="14" :center="{lat: this.coor.lat, lng: this.coor.lng}">
        <GmapMarker :position="{ lat: this.coor.lat, lng: this.coor.lng }" />
      </GmapMap>
    </div>
    <div class="modal-footer">
      <button type="button" @click="closeMod" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      <button type="button" class="btn btn-primary">Sitio web</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['setCoordinates']),
    closeMod () {
      this.$emit('closeMod', true)
      this.setCoordinates({lat: 0, lng: 0})
    }
  },
  computed: {
    ...mapGetters({
      coor: 'getCoords'
    })
  }
}
</script>
<style media="screen">
</style>
