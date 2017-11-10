<template>
  <div class="bloc">
    <div class="col">
      <h1>Accede</h1>
      <div class="login">
        <h5>Usuario</h5>
        <input type="text" name="" placeholder="usuario"><i class="material-icons ico">&#xe7fd;</i>
        <h5>Contraseña</h5>
        <input type="password" name="" placeholder="contraseña"><i class="material-icons ico">&#xE899;</i>
        <p>No recuerdas tu contraseña?</p>
        <button type="button" class="btn btn-danger send">Log-in</button>
      </div>
    </div>
    <div class="col left">
      <h1>Regístrate</h1>
      *Todos los campos son obligatorios
      <div class="login">
        <h5>Nombre completo</h5>
        <input type="text" name="" placeholder="nombre y apellidos"><i class="material-icons ico">&#xE87C;</i>
        <h5>Nombre de usuario</h5>
        <input type="text" name="" placeholder="nombre de usuario"><i class="material-icons ico">&#xe7fd;</i>
        <h5>Contraseña</h5>
        <input type="text" name="" placeholder="contraseña"><i class="material-icons ico">&#xE899;</i>
        <h5>Repetir contraseña</h5>
        <input type="text" name="" placeholder="repetir contraseña"><i class="material-icons ico">&#xE899;</i>
        <h5>Edad</h5>
        <input type="text" name="" placeholder="edad"><i class="material-icons ico">&#xE878;</i>
        <h5>Ciudad</h5>
        <input type="text" name="" placeholder="ciudad"><i class="material-icons ico">&#xE88A;</i>
        <div class="conditions">
          <input type="checkbox" style="width:5%;"><span>Acepto términos y condiciones de uso</span>
        </div>
        <button type="button" class="btn btn-info send">Registrarse</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";

.conditions { display: flex;align-items: center;}

.ico {
  margin-left: 10px;
}

h1 {
  color: $redColor;
  margin-bottom: 4%;
}
h5 {
  font-weight:200;
  margin-top: 10px;
  font-size: 16px;
}

img{width: 100%;}

.send {
  width: 85%;
  margin-top: 10px;
  height: 50px;
}

.bloc {
  width: 100%;
  margin-top: 2%;
}
.col {
  padding: 30px;
  width: 100%;
  border-top:1px solid #E9E9E9;
}

input {
  width: 85%;
  height: 40px;
  padding: 5px;
}

@media screen and (min-width: 750px) {

  .bloc {
    display: flex;
    flex-flow: row nowrap;
  }
  .col {
    width: 50%;

  }
  .left {
    border-left: 2px solid #E9E9E9;
    border-top:1px solid #E9E9E9;
    border-radius: 20px;
  }
}

</style>
