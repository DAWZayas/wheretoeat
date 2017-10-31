<template>
  <div class="double-window">
    <article>
      <img src="~/assets/images/img4.jpg">
      <div class="cabecera">
        <div class="titulo-star">
          <h1>La Tapa Madrileña</h1> <h5>(Majadahonda)</h5>
          <div class="stars">
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe839;</i></nuxt-link>
            <nuxt-link to="#" class="str">8.5</nuxt-link>
          </div>
        </div>
        <div class="icon-option">
          <nuxt-link to="#" class="marg"><i class="material-icons" style="color:#a85122;">&#xe55f;</i></nuxt-link>
          <nuxt-link to="#" class="marg"><i class="material-icons">&#xe0b9;</i></nuxt-link>
          <nuxt-link to="#" class="marg"><i class="material-icons">&#xe0cd;</i></nuxt-link>
        </div>
      </div>
      <hr>
      <h3>Buena localización, mejor precio</h3>
      <p>Una pulpería era, hasta inicios del siglo XX, el establecimiento comercial típico de
          las distintas regiones de Hispanoamérica, encontrándose ampliamente extendida desde
          Centroamérica hasta los países del Cono Sur. </p>
    </article>

    <article>
      <img src="~/assets/images/img5.jpg">
      <div class="cabecera">
        <div class="titulo-star">
          <h1>La Bohemia</h1> <h5>(Majadahonda)</h5>
          <div class="stars">
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe839;</i></nuxt-link>
            <nuxt-link to="#" class="str">8.5</nuxt-link>
          </div>
        </div>
        <div class="icon-option">
          <nuxt-link to="#" class="marg"><i class="material-icons" style="color:#a85122;">&#xe55f;</i></nuxt-link>
          <nuxt-link to="#" class="marg"><i class="material-icons">&#xe0b9;</i></nuxt-link>
          <nuxt-link to="#" class="marg"><i class="material-icons">&#xe0cd;</i></nuxt-link>
        </div>
      </div>
      <hr>
      <h3>Buena localización, mejor precio</h3>
      <p>Una pulpería era, hasta inicios del siglo XX, el establecimiento comercial típico de
          las distintas regiones de Hispanoamérica, encontrándose ampliamente extendida desde
          Centroamérica hasta los países del Cono Sur. </p>
    </article>
  </div>
</template>

<style media="screen">
.double-window{
	display: flex;
	flex-flow: column;
  }
  article {
    margin-bottom: 20px;
    padding-bottom:20px;
  }
  article:nth-last-child(1){
	margin-bottom: 0;
	padding-bottom: 0;
	border-bottom:none;
  }
  .titulo-star{
    display: flex;
    flex-flow: row wrap;
    font-size: 2rem;
    align-items: center;
    margin-top: 10px;
  }

  .titulo-star h1{
    margin-right: 2%;
    color: #89563a;
  }
  .titulo-star h5{
    margin-right: 3%;
  }
  .cabecera{
    display: flex;
    align-items: flex-end;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .icon-option{
    display: flex;
    flex-flow: row-reverse nowrap;
  }

  .icon-option a i{
    color: #2c3e50;;
    text-decoration: none;
    font-size: 2em;
  }

  .stars{
    display: flex;
    flex-flow: row nowrap;
    font-size: .7em;
  }
  .stars a{
    color: #2c3e50;
    text-decoration: none;
  }

  .marg{
    color: #2c3e50;
    margin-right: 15%;
  }

  hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
@media screen and (min-width: 800px) {
  article {
		padding: 10px;
	}
  .titulo-star h5{
      margin-top: 2%;
      display: flex;
  }
	.double-window {
		display: flex;
    flex-flow: row nowrap;
    border-left-style: solid;
		border-color: #a85122;
		border-width: 2px;
  }
}
</style>
