<template>
  <div class="modal fade" id="showComments" tabindex="-1" role="dialog" aria-labelledby="exampleShowComments" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleShowComments">Comentarios</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <commentC v-for="comment in comments" :comment="comment" :key="comment.id"></commentC>
        </div>
        <div class="bloc">
          <input type="text" class="comment" placeholder="escribe un comentario..">
          <button type="button" class="btn btn-info send">Comentar</button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import commentC from '~/components/commentC'
export default {
  props: ['info'],
  data () {
    return {
      comments: [
        {
          id: 22,
          user: 'Maria',
          comment: 'Me gusto mucho el sitio,muy bien decorado y un trato exquisíto'
        },
        {
          id: 33,
          user: 'Luis',
          comment: 'El camarero iba borracho y tardaron 20 minutos en traernos la cuenta'
        },
        {
          id: 44,
          user: 'Juan',
          comment: 'Celebré mi cumpleaños y nos dejaron liarla parda!! la peña subida en la barra y todo!'
        },
        {
          id: 55,
          user: 'Elena',
          comment: 'Sitio agradable, el escalope muy rico.'
        },
        {
          id: 66,
          user: 'Andrea',
          comment: 'Los postres son el plato fuerte de este lugar! el brownie espectacular'
        }
      ]
    }
  },
  components: {
    commentC
  }
}
</script>

<style scoped media="screen">
.send {
  width: 100%;
}
  .bloc {
    padding: 20px;
  }
  .comment {
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
    height: 40px;
  }
</style>
