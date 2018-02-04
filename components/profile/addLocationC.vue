<template>
  <div>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="showL">Localiza tu restaurante</h5>
          <span @click="closeMod" class="close">&times;</span>
        </div>
        <div class="modal-body">
          <addLocationMapC @coordinates="set($event)"></addLocationMapC>
        </div>
        <div class="modal-footer">
          <button type="button" @click="closeMod" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import addLocationMapC from '~/components/profile/addLocationMapC'
export default {
  data () {
    return {
    }
  },
  components: {
    addLocationMapC
  },
  methods: {
    set (data) {
      this.$emit('setCoor', data)
    },
    closeMod () {
      this.$emit('closeMod', true)
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
