<template>
    <div class="col">
      <div>
        <h5>Busqueda personalizada</h5>
        <input type="text" placeholder="nombre del restaurante..">
        <input type="text" placeholder="ciudad..">
        <h5>Filtros</h5>
        <div class="login">
        <div class="cel">
          <h6>Precio Medio</h6>
          <select v-model="bill">
            <option value="0">0 - 10 €</option>
            <option v-for="n in 9" :value="n">{{n}}0 - {{n+1}}0 €</option>
          </select>
        </div>
        <div class="cel">
          <h6>Valoración</h6>
          <select v-model="points">
            <option v-for="n in 10" :value="n">{{n}}</option>
          </select>
        </div>
        </div>
      </div>
        <button type="button" class="btn btn-danger send">Buscar</button>
        <button type="button" class="btn btn-info send">Restaurantes cerca de mí</button>
      </div>
    </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      points: 5,
      bill: 0
    }
  }
}
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";

.login {
  display: flex;
  flex-flow: row nowrap;
}
.cel {
  width: 50%;
}

select {
  width: 90%;
  height: 40px;
  padding: 5px;
}
.fillF {
  width: 85%;
}

.fillF h5 {
  background-color: #E5BE5C;
  border-radius: 5px;
  padding: 5px;
}

aside .col {
  width: 100%;
}

.send {
  width: 100%;
  margin-top: 10px;
  height: 50px;
}

.log {
  background-color: #c0b386;
  border: none;
}

.log:hover {
  background-color: #9a8f67;
}

input {
  width: 100%;
  height: 50px;
  padding: 5px;
  margin-top: 15px;
}

h5 {
  background-color: #00a4ba;
  padding: 5px;
  margin-top: 15px;
  color: white;
  font-weight: 300;
}

</style>
