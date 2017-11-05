<template>
  <aside>
			<div class="widget" style="margin-top: 5%;">
				<img src="~/assets/images/img10.jpg">
  			<nuxt-link to="#" class="icon-location"><span>Travesia</span></nuxt-link><h5>(Las Rozas)</h5>
  			<div class="aside-icons">
          <div class="stars">
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe839;</i></nuxt-link>
            <nuxt-link to="#" class="str">8.5</nuxt-link>
            <nuxt-link to="#"><i class="material-icons" style="color:#a85122;">&#xe55f;</i></nuxt-link>
            <nuxt-link to="#" clss="str">(Ver más)</nuxt-link>
          </div>
			  </div>
			</div>

			<div class="widget">
				<img src="~/assets/images/img2.jpg">
  			<nuxt-link to="#" class="icon-location"><span>La Fuente</span></nuxt-link><h5>(Collado Villalba)</h5>
  			<div class="aside-icons">
          <div class="stars">
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe838;</i></nuxt-link>
            <nuxt-link to="#"><i class="material-icons">&#xe839;</i></nuxt-link>
            <nuxt-link to="#" class="str">8.5</nuxt-link>
            <nuxt-link to="#"><i class="material-icons" style="color:#a85122;">&#xe55f;</i></nuxt-link>
            <nuxt-link to="#" clss="str">(Ver más)</nuxt-link>
          </div>
			  </div>
			</div>
		</aside>
</template>
<style lang='scss'>
@import "assets/sass/colors.scss";
aside {
  @extend .flexWrap;
	background:$whiteColor;
	padding:10px;
	font-size: 1.3em;
	flex:1 1 30%;
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
	color: $blueColor;
	text-decoration: none;
}
.widget a span{
  color:$redTitle;
  font-size: 2.1rem;
}
.widget a {
  text-decoration: none;
}

@media screen and (min-width: 650px) {
  aside {
    width: 30%;
		flex-direction: column;
		flex: 1 1 30%;
		border-top-style: solid;
		border-top-left-radius: 20px;
		border-color: $darkBlue;
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
