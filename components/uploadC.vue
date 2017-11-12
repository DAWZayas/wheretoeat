<template>
  <div>
    <h5>Subir publicación</h5>
    <input type="file" name="" value="">
    <h5>Titulo</h5>
    <input type="text" name="" placeholder="titulo..">
    <h5>Descripción</h5>
    <textarea placeholder="tu experiencia.."></textarea>
    <div class="blocinf">
      <div class="cel">
        <h5>Precio Medio</h5>
        <select>
          <option value="0">0 - 10 €</option>
          <option v-for="n in 9" value="n">{{n}}0 - {{n+1}}0 €</option>
        </select>
      </div>
      <div class="cel">
        <h5>Valoración</h5>
        <select>
          <option v-for="n in 10" value="n">{{n}}</option>
        </select>
      </div>
    </div>
    <div class="blocinf">
      <div class="cel">
        <h5>Añadir localización</h5>
        <button type="button" class="btn btn-info">Buscar en Google Maps</button>
      </div>
      <div class="cel">
        <h5>Subir</h5>
        <button type="button" class="btn btn-danger" style="width:100%;">Subir post</button>
      </div>
    </div>
  </div>
</template>

<style scoped media="screen">

.cel {
  padding: 10px;
  width: 100%;
  border-top:1px solid #E9E9E9;
}

input {
  width: 85%;
  height: 40px;
  padding: 5px;
}

select {
  width: 90%;
  height: 40px;
  padding: 5px;
}

h5 {
  font-weight:200;
  margin-top: 10px;
  font-size: 16px;
  background-color: #E9E9E9;
  padding: 5px;
}

input {
  width: 85%;
  height: 40px;
  padding: 5px;
}

textarea {
  width: 100%;
  padding: 10px;
}

@media screen and (min-width: 750px) {

  .blocinf {
    display: flex;
    flex-flow: row wrap;
  }

  .cel {
    width: 100%;
}
}

@media screen and (min-width: 1200px) {
  .cel {
    width: 50%;

  }
}
</style>
