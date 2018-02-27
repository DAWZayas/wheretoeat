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
          <commentC v-for="comment in comments" :comment="comment" :key="comment.id" v-if="comment.user_id"></commentC>
        </div>
        <div class="bloc" v-if="userId">
          <input type="text" v-model="newCom" class="comment" placeholder="escribe un comentario..">
          <button type="button" @click="addNewCom" class="btn btn-info send">Comentar</button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import commentC from '~/components/post/commentC'
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['info'],
  data () {
    return {
      newCom: ''
    }
  },
  methods: {
    ...mapActions(['addNewComment']),
    addNewCom () {
      if (this.newCom !== '') { this.addNewComment({user_id: this.userId, comment: this.newCom}) }
      this.newCom = ''
    }
  },
  computed: {
    ...mapGetters({
      comments: 'getComments',
      userId: 'getUser'
    })
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
