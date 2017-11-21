<template>
  <div class="modal fade" :class="{show: show}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Publicación añadida</h5>
        </div>
        <div class="modal-body">
          <h4>Tu publicación ha sido añadida <i class="material-icons">&#xE876;</i></h4>
        </div>
        <div class="modal-footer">
          <button type="button" @click="closeAdvert" class="btn btn-info" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    initialShow: {
      type: Boolean
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    closeAdvert () {
      this.show = false
      this.$emit('onCloseModal')
    }
  },
  watch: {
    initialShow () {
      this.show = this.initialShow
    }
  }
}
</script>
<style scoped>
  .show {
    display: block;
    background-color:rgba(0, 0, 0, 0.7);
    padding-top: 10%;
  }
</style>
