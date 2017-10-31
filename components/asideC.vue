<template>
  <aside>
			<div class="widget">
				<img src="~/assets/images/img3.jpg">
  			<span>Travesia</span><a href="#" class="icon-location loc" style="font-size: 2rem;"></a><h5>(Las Rozas)</h5>
  			<div class="aside-icons">
          <div class="stars">
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe839;</i></nuxt-link>
            <nuxt-link to="#" class="str">8.5</nuxt-link>
            <nuxt-link to="#" clss="str">(Ver más)</nuxt-link>
          </div>
			  </div>
			</div>

			<div class="widget">
				<img src="~/assets/images/img2.jpg">
  			<span>La Fuente</span><a href="#" class="icon-location loc" style="font-size: 2rem;"></a><h5>(Collado Villalba)</h5>
  			<div class="aside-icons">
          <div class="stars">
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe839;</i></nuxt-link>
            <nuxt-link to="#" class="str">8.5</nuxt-link>
            <nuxt-link to="#" clss="str">(Ver más)</nuxt-link>
          </div>
			  </div>
			</div>
		</aside>
</template>
<style media="screen">
aside {
	background:#fff;
	padding:10px;
	font-size: 1.3em;
	flex:1 1 30%;
	display: flex;
	flex-wrap:wrap;
	flex-direction:column;
	justify-content:flex-start;
}
aside .widget {
  padding-bottom: 10%;
  margin-bottom: 5%;
	font-size: 1.5rem;
	flex-flow: row wrap;
}

.aside-icons{
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}
.str{
	color: #2c3e50;
	text-decoration: none;
}

@media screen and (min-width: 800px) {
  aside {
    width: 30%;
		flex-direction: column;
		flex: 1 1 30%;
		border-top-style: solid;
		border-top-left-radius: 20px;
		border-color: #38393a;
		border-width: 2px;
  }
  aside .widget {
    border-right-style: solid;
    border-top-style: solid;
    border-color: black;
    border-width: 1px;
  }
}
</style>

